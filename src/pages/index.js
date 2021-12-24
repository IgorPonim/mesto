import '../pages/index.css'
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js'
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js'
import { PopupWithForm } from '../scripts/PopupWithForm.js'
import { PopupWithImage } from '../scripts/PopupWithImage.js';

import {
  popupProfile, popupElement, popupImage, profileButtonInfo, popupCloseButton, profileForm, nameInputValue, profileName, jobInputValue,
  profileStatus, popupButton,/* initialCards,*/ elements, cardTemplate, addButtonPlace, infoCardCloseButton, popupButtonToCreateNewElement,
  nameOfNewElement, linkOfNewElement, elementReactionLike, formAddNewCard, imageInsidePopup, imageCloseButton, imageInformation,
  validationConfig, avatar, popupAvatar, avatarForm, avatarButton, linkOfNewAva, profileButton, avatarButtonSubmit

} from '../utils/constants.js' //вынес константы в папку utils как в тренажере, почистил index.js



const addFormValidationImage = new FormValidator(validationConfig, formAddNewCard);
const addFormValidationProfile = new FormValidator(validationConfig, profileForm);
const addFormValidationAvatar = new FormValidator(validationConfig, avatarForm)

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();
addFormValidationAvatar.enableValidation();
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



import { Api } from '../scripts/Api.js';
const api = new Api({
  adress: "https://mesto.nomoreparties.co/v1/cohort-32",
  headers: {
    authorization: "49a3f156-043e-4000-9a32-20530068bc3d",

    'Content-Type': 'application/json'
  }
});
//загрузил с сервера исходные карточки
api.getInitialCards()
  .then((data) => {
    data.forEach(createElements)//data.name = name, data.link = src, likes.length = likes[]
  })
  .catch((error) => {
    console.log(error);//мало ли, ошибка
  });

api.getUserInfo().then((data) => { // вызвали данные сервера и отправили в dom
  profileInfo.setUserInfo(data)
})



function createElements(data) {
  const card = new Card({
    data,
    template: '.template',
    handleCardClick: () => imagePopup.open(data),
    sendLike: api.sendLike,
    deleteLike: api.deleteLike,
    id: profileInfo.id,
    deleteCards: api.deleteСards
  });

  section.additem(card.createElement());
}


function addNewElement() {//SubmitCallBack номер 2

  api.createCard({
    name: nameOfNewElement.value,
    link: linkOfNewElement.value,

  })
    .then((data) => {
      popupButtonToCreateNewElement.textContent = 'Сохранение..'
      setTimeout(() => createElements(data), 2000)
    })
    .catch((error) => {
      console.log(error);
    })

};



const section = new Section(
  {
    items: [],//раньше был initialCards
    renderer: createElements,
  },
  elements
)

/*section.renderer()//зарендерил карточки*/

//беру исходные данные
const profileInfo = new UserInfo({
  name: profileName,
  job: profileStatus,
  avatar: avatar//добавил аватарочку
});

const imagePopup = new PopupWithImage(popupImage);
const profilePopup = new PopupWithForm(popupProfile, handleProfileSubmit);//
const elementPopup = new PopupWithForm(popupElement, addNewElement);
const avatarPopup = new PopupWithForm(popupAvatar, changeAvatar);

function profileEditHandler() {
  const { name, job } = profileInfo.getUserInfo();
  nameInputValue.value = name
  jobInputValue.value = job;
  profilePopup.open()
  addFormValidationProfile.resetValidation()
  profileButton.textContent = 'Сохранить'
}


function handleProfileSubmit(data) {//SubmitCallBack номер 1
  api.editUserInfo(data)
    .then((info) => {
      profileButton.textContent = 'Сохранение..'
      setTimeout(() => profileInfo.setUserInfo(info), 2000)
    })

    .catch((error) => {
      console.log(error);
    });
}

function elementEditHandler() {
  elementPopup.open()
  nameOfNewElement.value = ''
  linkOfNewElement.value = ''
  addFormValidationImage.resetValidation()
  popupButtonToCreateNewElement.textContent = 'Создать'
}




function avatarEditHandler() {
  avatarPopup.open()
  linkOfNewAva.value = ''
  addFormValidationAvatar.resetValidation()
  avatarButtonSubmit.textContent = 'Сохранить'
}
function changeAvatar() {//отправлю данные на сервер и обновлюсь //SubmitCallBack номер 3
  api.changeAvatar(linkOfNewAva.value)

    .then((info) => {
      avatarButtonSubmit.textContent = 'Сохранение..'
      setTimeout(() => profileInfo.setUserInfo(info), 2000)
    })//обновил

    .catch((error) => {
      console.log(error);
    });
}


//слушатели
profileButtonInfo.addEventListener('click', profileEditHandler);
addButtonPlace.addEventListener('click', elementEditHandler);
avatarButton.addEventListener('click', avatarEditHandler)
imagePopup.setEventListeners()
profilePopup.setEventListeners()
elementPopup.setEventListeners()
avatarPopup.setEventListeners()





