import '../pages/index.css'
import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js'
import { Section } from '../scripts/Section.js';
import { UserInfo } from '../scripts/UserInfo.js'
import { PopupWithForm } from '../scripts/PopupWithForm.js'
import { PopupWithImage } from '../scripts/PopupWithImage.js';

import {
  popupProfile, popupElement, popupImage, profileButtonInfo, popupCloseButton, profileForm, nameInputValue, profileName, jobInputValue,
  profileStatus, popupButton, initialCards, elements, cardTemplate, addButtonPlace, infoCardCloseButton, popupButtonToCreateNewElement,
  nameOfNewElement, linkOfNewElement, elementReactionLike, formAddNewCard, imageInsidePopup, imageCloseButton, imageInformation,
  validationConfig
} from '../utils/constants.js' //вынес константы в папку utils как в тренажере, почистил index.js

initialCards.sort(() => 0.9 - Math.random()) // появление карточек носит рандомный характер

const addFormValidationImage = new FormValidator(validationConfig, formAddNewCard);
const addFormValidationProfile = new FormValidator(validationConfig, profileForm);

addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


function createElements(data) {
  const card = new Card(data, '.template', () => imagePopup.open(data));
  section.additem(card.createElement());//ненужен return протупил, действительно не возвращает
}

const section = new Section(
  {
    items: initialCards,
    renderer: createElements,
  },
  elements
)

section.renderer()//зарендерил карточки

//беру исходные данные
const profileInfo = new UserInfo({
  name: profileName,
  job: profileStatus,
});

const imagePopup = new PopupWithImage(popupImage);
const profilePopup = new PopupWithForm(popupProfile, handleProfileSubmit);//
const elementPopup = new PopupWithForm(popupElement, addNewElement);


function profileEditHandler() {
  const { name, job } = profileInfo.getUserInfo();
  nameInputValue.value = name
  jobInputValue.value = job;
  profilePopup.open()
  addFormValidationProfile.resetValidation()
}


function handleProfileSubmit(data) {//SubmitCallBack номер 1
  profileInfo.setUserInfo(data)
}

function elementEditHandler() {
  elementPopup.open()
  nameOfNewElement.value = ''
  linkOfNewElement.value = ''
  addFormValidationImage.resetValidation()
}


function addNewElement() {//SubmitCallBack номер 2
  const newValues = {
    name: nameOfNewElement.value,
    link: linkOfNewElement.value,
  }
  createElements(newValues)//переделал
};

//слушатели
profileButtonInfo.addEventListener('click', profileEditHandler);
addButtonPlace.addEventListener('click', elementEditHandler);
imagePopup.setEventListeners()
profilePopup.setEventListeners()
elementPopup.setEventListeners()


