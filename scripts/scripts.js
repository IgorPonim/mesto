const popupProfile = document.querySelector('.popup_type_profile');
const popupElement = document.querySelector('.popup_type_element');
const popupImage = document.querySelector('.popup_type_image')
const profileButtonInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileForm = document.querySelector('.popup__form');
const nameInputValue = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.popup__input_type_job');
const myStatus = document.querySelector('.profile__status');

//основыне функции - открыть и закрыть попап
function popupOpen(evt) {
  evt.classList.add('popup_open');
}

function popupClose(evt) {
  evt.classList.remove('popup_open')
}

function profileEditHandler() {
  nameInputValue.value = profileName.textContent;
  profileJob.value = myStatus.textContent;
  popupOpen(popupProfile);
}
function profileCloseHandler() {
  popupClose(popupProfile); //все как вы хотели))
}
//обработчики событий
profileButtonInfo.addEventListener('click', profileEditHandler);
popupCloseButton.addEventListener('click', profileCloseHandler);
profileForm.addEventListener('submit', handleProfileSubmit)

/*переносим данные из полей ввода в профиль*/
function handleProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = nameInputValue.value;
  myStatus.textContent = profileJob.value;
  popupClose(popupProfile);
}

/*это чтобы закрывался попап не только после нажатия на крестик но и на оверлей*/
function closePopupByOverlay(event) {
  if (event.target.classList.contains('popup')) {
    popupClose(popupProfile);
    elementCloseHandler(popupElement);
    ImageCloseHandler(popupImage);
  }
}
popupProfile.addEventListener('click', closePopupByOverlay);




//////////////////////////////////////////////////////////////////////////все что выше это ПР4
//////////////////////////////////////////////////////////////////////////все что ниже это ПР5

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//теперь я выберу исходную секцию, куда добавляю карточки, ну и шаблон/темплате
const elements = document.querySelector('.elements')
const cardTemplate = document.querySelector('.template').content;


///Сразу добавляем карточки при запуске страниці//
initialCards.forEach(prependElements);

function createElement(data) {
  const element = cardTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__name').textContent = data.name;
  element.querySelector('.element__image').src = data.link;
  element.querySelector('.element__image').alt = data.name;
  element.querySelector('.element__delete').addEventListener('click', (ev) => {
    ev.target.closest('.element').remove()
  })
  element.querySelector('.element__reaction').addEventListener('click', (ev) => {
    ev.target.classList.toggle('element__reaction_like')
  })
  /*elements.append(element);*/
  element.querySelector('.element__image').addEventListener('click', popupOpenImage);
  return element;
};
//////вывел в отдельную функцию, как вы сказали
function prependElements(item) {
  const element = createElement(item);
  elements.prepend(element)
}



//////////////////////////////////////////////////////
//открываем и закрываем попап, по аналогии с тем, что касается профиля
const addButtonPlace = document.querySelector('.profile__add');
const newCard = document.querySelector('.popup_type_element');
const closeButtonInfoCard = document.querySelector('.popup__close_type_element')

function elementEditHandler() {
  popupOpen(popupElement);//
}
function elementCloseHandler() {
  popupClose(popupElement);
}
addButtonPlace.addEventListener('click', elementEditHandler);
closeButtonInfoCard.addEventListener('click', elementCloseHandler);
//закрываем попап не только по крестику
newCard.addEventListener('click', closePopupByOverlay);

////////////////////////////////////////
////////////////////////////////////////
//дадим пользователю возможность добавить карточки
const nameOfNewElement = document.querySelector('.popup__input_type_name-element');
const linkOfNewElement = document.querySelector('.popup__input_type_link');
const elementReactionLike = document.querySelector('.element__reaction')
//пользователь создаст свою карточку на основе шаблона из prependElements и будут внесены данные из формы
function addNewElement(event2) {

  const newValues = {
    name: nameOfNewElement.value,
    link: linkOfNewElement.value,
  }

  prependElements(newValues)
  event2.preventDefault()
  elementCloseHandler()
};

const buttonCreateCard = document.querySelector('.popup__button_type_create');
const popupFormImage = document.querySelector('.popup__form_type_image');
popupFormImage.addEventListener('submit', addNewElement)

//////////////////////////////теперь последний попап с картинкой


const imageInsidePopup = document.querySelector('.image-container__img');
const imageCloseButton = document.querySelector('.popup__close_type_img');
const imageInformation = document.querySelector('.image-container__info')
//открываю карточку и переношу в нее ссылки на картинки и прочие атрибуты
function popupOpenImage(evt) {
  popupOpen(popupImage);
  imageInsidePopup.src = evt.target.src;
  /*imageInformation.textContent = evt.target.parentElement.querySelector('.element__name').textContent;*/
  imageInformation.textContent = evt.target.alt
}

function ImageCloseHandler() {
  popupClose(popupImage)
}
imageCloseButton.addEventListener('click', ImageCloseHandler);
popupImage.addEventListener('click', closePopupByOverlay)



