export const popupProfile = document.querySelector('.popup_type_profile');
export const popupElement = document.querySelector('.popup_type_element');
export const popupImage = document.querySelector('.popup_type_image')
export const profileButtonInfo = document.querySelector('.profile__edit');
export const popupCloseButton = document.querySelector('.popup__close_type_profile');
export const profileForm = document.querySelector('.popup__form_type_info');
export const nameInputValue = document.querySelector('.popup__input_type_name');
export const profileName = document.querySelector('.profile__name');
export const jobInputValue = document.querySelector('.popup__input_type_job');
export const profileStatus = document.querySelector('.profile__status');
export const popupButton = document.querySelector('.popup__button');

export const initialCards = [{
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



export const elements = document.querySelector('.elements')
export const cardTemplate = document.querySelector('.template').content;
export const addButtonPlace = document.querySelector('.profile__add');
export const infoCardCloseButton = document.querySelector('.popup__close_type_element')
export const popupButtonToCreateNewElement = document.querySelector('.popup__button_type_create')
export const nameOfNewElement = document.querySelector('.popup__input_type_name-element');
export const linkOfNewElement = document.querySelector('.popup__input_type_link');

export const linkOfNewAva = document.querySelector('#input-ava-link');

export const elementReactionLike = document.querySelector('.element__reaction')
export const formAddNewCard = document.querySelector('.popup__form_type_image');
export const imageInsidePopup = document.querySelector('.image-container__img');
export const imageCloseButton = document.querySelector('.popup__close_type_img');
export const imageInformation = document.querySelector('.image-container__info')






export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

export const avatar = document.querySelector('.profile__avatars')
export const popupAvatar = document.querySelector('.popup_type_avatar-edit')
export const avatarForm = document.querySelector('.popup__form_type_avatar-edit');
export const avatarButton = document.querySelector('.profile__avatars-edit')
export const profileButton = document.querySelector('.popup__button_type_save')
export const avatarButtonSubmit = document.querySelector('.popup__button_type_change')
export const popupConfirm = document.querySelector('.popup_type_confirm')
export const deleteButtonOnCard = document.querySelector('.element__delete')
