import '../pages/index.css'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { PopupWithImage } from '../components/PopupWithImage.js';
import { ConfirmationPopup } from '../components/ConfirmationPopup.js';

import {
  popupProfile, popupElement, popupImage, profileButtonInfo, popupCloseButton, profileForm, nameInputValue, profileName, jobInputValue,
  profileStatus, popupButton,/* initialCards,*/ elements, cardTemplate, addButtonPlace, infoCardCloseButton, popupButtonToCreateNewElement,
  nameOfNewElement, linkOfNewElement, elementReactionLike, formAddNewCard, imageInsidePopup, imageCloseButton, imageInformation,
  validationConfig, avatar, popupAvatar, avatarForm, avatarButton, linkOfNewAva, profileButton, avatarButtonSubmit
  , popupConfirm, deleteButtonOnCard
} from '../utils/constants.js' //вынес константы в папку utils как в тренажере, почистил index.js

const addFormValidationImage = new FormValidator(validationConfig, formAddNewCard);
const addFormValidationProfile = new FormValidator(validationConfig, profileForm);
const addFormValidationAvatar = new FormValidator(validationConfig, avatarForm)

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();
addFormValidationAvatar.enableValidation();
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



import { Api } from '../components/Api.js';
const api = new Api({
  adress: "https://mesto.nomoreparties.co/v1/cohort-32",
  headers: {
    authorization: "49a3f156-043e-4000-9a32-20530068bc3d",

    'Content-Type': 'application/json'
  }
});
//обьединил 2 промиса как в задании
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    profileInfo.setUserInfo(userData);
    //Геннадий, вы меня запутали немношко, написали в замечаниях чтобы я изменил метод renderItems(items) {
      //а у меня нет функции с таким названием, и наставник не помог, в ПР8 все пропустили без замечаний
      //может вы имели ввиду чтото типа такого cards.forEach((item) => {
    //   createElements(
    //     {
    //       name: item.name,
    //       link: item.link,
    //       likes: item.likes,
    //       _id: item._id,
    //       owner: item.owner._id,
    //     })
    // }) //// но тогда мне нужно чтото придумать что делать с лайками, как то заморочиться прописать отдельную функцию для сравнения
    //если можете и так пропустить - буду рад ;-) или напишите фидбэк
    cards.forEach(createElements);
  })
  .catch((err) => {
    console.log(err);
  });



//нижняя функция не взаимодействует с дом, просто создает экземлпяр
function createCard(data) {
  const card = new Card({
    data,
    template: '.template',
    handleCardClick: () => imagePopup.open(data),
    sendLike: api.sendLike,
    deleteLike: api.deleteLike,//а здесь мне надо прописывать catch и finally?
    id: profileInfo.id,
    deleteCards: () => { //здесь я понимаю что нужно, потому что нет ссылки на метод
      confirmPopup.open(() => {
        confirmPopup.renderLoading(true);
        api.deleteСards(data._id)
          .then(() => {
            card._handeDeleteClick(data._id);
            card.removeTemplate()
            confirmPopup.close();
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            confirmPopup.renderLoading(false);

          })
      })
    }
  })
  return card.createElement()//я надеюсь вас правильно понял?
}

function createElements(data) {
  const card = createCard(data)
  section.additem(card);
}


function elementEditHandler() {
  elementPopup.open()
  addFormValidationImage.resetValidation()
}

function addNewElement(data) {//SubmitCallBack номер 2
  elementPopup.renderLoading(true)
  api.createCard(data)
    .then((data) => {
      createElements(data)
      elementPopup.close()
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      elementPopup.renderLoading(false);
    })
};


const section = new Section(
  {
    items: [],//раньше был initialCards
    renderer: createElements,
  },
  elements
)

// section.renderer()

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
const confirmPopup = new ConfirmationPopup(popupConfirm)


function profileEditHandler() {
  const { name, job } = profileInfo.getUserInfo();
  nameInputValue.value = name
  jobInputValue.value = job;
  profilePopup.open()
  addFormValidationProfile.resetValidation()

}

function handleProfileSubmit(data) {
  profilePopup.renderLoading(true)
  api.editUserInfo(data)
    .then((info) => {
      profileInfo.setUserInfo(info)
      profilePopup.close()
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      profilePopup.renderLoading(false)
    });
}


function avatarEditHandler() {
  avatarPopup.open()
  addFormValidationAvatar.resetValidation()
}

function changeAvatar(data) {
  avatarPopup.renderLoading(true);
  api.changeAvatar(data.link)
    .then((info) => {
      profileInfo.setUserInfo(info);
      avatarPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
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
confirmPopup.setEventListeners()




