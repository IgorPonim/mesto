
const popupProfile = document.querySelector('.popup_type_profile');
const popupElement = document.querySelector('.popup_type_element');
const popupImage = document.querySelector('.popup_type_image')
const profileButtonInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close_type_profile');
const profileForm = document.querySelector('.popup__form_type_info');
const nameInputValue = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const jobInputValue = document.querySelector('.popup__input_type_job');
const profileStatus = document.querySelector('.profile__status');
const popupButton = document.querySelector('.popup__button');

const initialCards = [{
  name: 'Будапешт', link: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
}, {
  name: 'Сингапур', link: 'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'
}, {
  name: 'Токио', link: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
}, {
  name: 'Брисбен', link: 'https://images.unsplash.com/photo-1566734904496-9309bb1798ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
}, {
  name: 'Рим', link: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80'
}, { name: 'Севастополь', link: 'https://travelvesti.ru/images/2020/Oct2020/08/_YVN6735.jpg' }];



const elements = document.querySelector('.elements')
const cardTemplate = document.querySelector('.template').content;
const addButtonPlace = document.querySelector('.profile__add');
const infoCardCloseButton = document.querySelector('.popup__close_type_element')
const popupButtonToCreateNewElement = document.querySelector('.popup__button_type_create')
const nameOfNewElement = document.querySelector('.popup__input_type_name-element');
const linkOfNewElement = document.querySelector('.popup__input_type_link');
const elementReactionLike = document.querySelector('.element__reaction')
const formAddNewCard = document.querySelector('.popup__form_type_image');
const imageInsidePopup = document.querySelector('.image-container__img');
const imageCloseButton = document.querySelector('.popup__close_type_img');
const imageInformation = document.querySelector('.image-container__info')
const popups = document.querySelectorAll('.popup')


import { Card } from './card.js';
import { FormValidator } from './FormValidator.js'

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

const addFormValidationImage = new FormValidator(validationConfig, formAddNewCard);
const addFormValidationProfile = new FormValidator(validationConfig, profileForm);


addFormValidationImage.enableValidation();
addFormValidationProfile.enableValidation();

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

import { Section } from './section.js';
function createElements(item) {//это просто взрыв мозга, как же тяжело быть программистом
  const card = new Card(item, '.template');//спасибо наставникам, что слёзы вытирают
 return section.additem(card.createElement()); //лучше уж кассиром в пятерочке
}// короче в предыдущей пр7 была у меня функция createElements которая возвращала вызов метода из
//card, а теперь возвращает метод в классе section которому передается метод в классе card ааааааа!!
//сразу почему то вспоминаются мемы с xzibit //

const section = new Section(
  {
    items: initialCards,
    renderer: createElements,
  },
  elements
)

section.renderer()//



export function popupOpen(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeByEscape)
}

export function popupClose(popup) {
  popup.classList.remove('popup_open')
  document.removeEventListener('keydown', closeByEscape)
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_open')
    popupClose(openedPopup)
  }
}

function profileEditHandler() {
  nameInputValue.value = profileName.textContent;
  jobInputValue.value = profileStatus.textContent;
  popupOpen(popupProfile);
  addFormValidationProfile.resetValidation()
}


function handleProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = nameInputValue.value;
  profileStatus.textContent = jobInputValue.value;
  popupClose(popupProfile);
}



function elementEditHandler() {
  popupOpen(popupElement);
  nameOfNewElement.value = ''
  linkOfNewElement.value = ''
  /*nameOfNewElement.dispatchEvent(new Event('input'));
  linkOfNewElement.dispatchEvent(new Event('input'));*/
  addFormValidationImage.resetValidation()
}


function addNewElement(event) {

  const newValues = {
    name: nameOfNewElement.value,
    link: linkOfNewElement.value,
  }
  createElements(newValues)//переделал
  event.preventDefault()
  popupClose(popupElement)
};


popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_open')) {
      popupClose(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      popupClose(popup)
    }
  })
})

//обработчики событий
profileButtonInfo.addEventListener('click', profileEditHandler);
profileForm.addEventListener('submit', handleProfileSubmit)
addButtonPlace.addEventListener('click', elementEditHandler);
formAddNewCard.addEventListener('submit', addNewElement)

/////////

