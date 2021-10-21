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

//я прошу прощения за то, что упорно не хочу менять эту структуру на константы/функции/обработчики,
//потому что боюсь запутаться в своем коде, это первый опыт в js и иногда сам путаюсь что и где сделал
// :-)
//да и комментарии пишу для себя, любимого, чтобы не забыть//


//основыне функции - открыть и закрыть попап//
function popupOpen(popup) {
  popup.classList.add('popup_open');
}

function popupClose(popup) {
  popup.classList.remove('popup_open')
}

function profileEditHandler() {
  nameInputValue.value = profileName.textContent;
  jobInputValue.value = profileStatus.textContent;
  popupOpen(popupProfile);
}
function profileCloseHandler() {
  popupClose(popupProfile);
}
//обработчики событий
profileButtonInfo.addEventListener('click', profileEditHandler);
popupCloseButton.addEventListener('click', profileCloseHandler);
profileForm.addEventListener('submit', handleProfileSubmit)

/*переносим данные из полей ввода в профиль*/
function handleProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = nameInputValue.value;
  profileStatus.textContent = jobInputValue.value;
  popupClose(popupProfile);
}

//может быть я закрою все оверлеи таким способом?
/*Array.from(document.querySelectorAll('.popup')).map(popup => popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_open')) {
    popupClose(popup);
  }
}));*/


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

/*Array.from(initialCards).forEach((el) => prependElement(el));*///мне очень нравится эта конструкция, чувство иррациональное, потому искреннее//
initialCards.forEach(prependElement);
function createElement(data) {
  const element = cardTemplate.querySelector('.element').cloneNode(true);
  const elementImage = element.querySelector('.element__image');
  element.querySelector('.element__name').textContent = data.name;
  elementImage.src = data.link;
  elementImage.alt = data.name;
  element.querySelector('.element__delete').addEventListener('click', (ev) => {
    ev.target.closest('.element').remove()
  })
  element.querySelector('.element__reaction').addEventListener('click', (ev) => {
    ev.target.classList.toggle('element__reaction_like')
  })
  /*elements.append(element);*/
  elementImage.addEventListener('click', popupOpenImage);
  return element;
};
//////вывел в отдельную функцию, как вы сказали
function prependElement(item) {
  const element = createElement(item);
  elements.prepend(element)
}


//////////////////////////////////////////////////////
//открываем и закрываем попап, по аналогии с тем, что касается профиля
const addButtonPlace = document.querySelector('.profile__add');
const infoCardCloseButton = document.querySelector('.popup__close_type_element')

function elementEditHandler() {
  popupOpen(popupElement);//
}
function elementCloseHandler() {
  popupClose(popupElement);
}
addButtonPlace.addEventListener('click', elementEditHandler);
infoCardCloseButton.addEventListener('click', elementCloseHandler);

////////////////////////////////////////
////////////////////////////////////////
//дадим пользователю возможность добавить карточки
const nameOfNewElement = document.querySelector('.popup__input_type_name-element');
const linkOfNewElement = document.querySelector('.popup__input_type_link');
const elementReactionLike = document.querySelector('.element__reaction')
//пользователь создаст свою карточку на основе шаблона из prependElement и будут внесены данные из формы
function addNewElement(event) {

  const newValues = {
    name: nameOfNewElement.value,
    link: linkOfNewElement.value,
  }

  prependElement(newValues)
  event.preventDefault()
  elementCloseHandler()
};

const formAddNewCard = document.querySelector('.popup__form_type_image');
formAddNewCard.addEventListener('submit', addNewElement)

//////////////////////////////теперь последний попап с картинкой

const imageInsidePopup = document.querySelector('.image-container__img');
const imageCloseButton = document.querySelector('.popup__close_type_img');
const imageInformation = document.querySelector('.image-container__info')
//открываю карточку и переношу в нее ссылки на картинки и прочие атрибуты
function popupOpenImage(evt) {
  popupOpen(popupImage);
  imageInsidePopup.src = evt.target.src;
  imageInsidePopup.alt = evt.target.alt;
  /*imageInformation.textContent = evt.target.parentElement.querySelector('.element__name').textContent;*/
  imageInformation.textContent = evt.target.alt
}

function imageCloseHandler() {
  popupClose(popupImage)
}
imageCloseButton.addEventListener('click', imageCloseHandler);





