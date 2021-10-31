
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
const popupButton = document.querySelector('.popup__button')



//основыне функции - открыть и закрыть попап плюс добавил/удалил обработчик на клавишу эскапе, по совету старшего студента//
function popupOpen(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closeByEscape)
}

function popupClose(popup) {
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

  nameInputValue.dispatchEvent(new Event('input'));
  jobInputValue.dispatchEvent(new Event('input'));
  popupButton.classList.remove('popup__button_disabled')
  popupButton.removeAttribute('disabled')//сбрасываю настройки при открытии попапа до дефолта
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

//Обошел все оверлеи добавил обработчик на клик, и дал функцию закрытия
document.body.querySelectorAll('.popup').forEach(el => el.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_open')) {
    popupClose(el);
  }
}));


//////////////////////////////////////////////////////////////////////////все что выше это ПР4
//////////////////////////////////////////////////////////////////////////все что ниже это ПР5

const initialCards = [
  {
    name: 'Будапешт',
    link: 'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'сингапур',
    link: 'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Токио',
    link: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Брисбен',
    link: 'https://images.unsplash.com/photo-1566734904496-9309bb1798ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
  },
  {
    name: 'Рим',
    link: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80'
  },
  {
    name: 'cевасТОполь',
    link: 'https://travelvesti.ru/images/2020/Oct2020/08/_YVN6735.jpg'
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
  element.querySelector('.element__name').textContent = data.name.slice(0, 1).toUpperCase() + data.name.slice(1).toLowerCase();//сделал чтобы названия новых карточек всегда были с заглавной
  elementImage.src = data.link;
  elementImage.alt = data.name.slice(0, 1).toUpperCase() + data.name.slice(1).toLowerCase();
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
const popupButtonToCreateNewElement = document.querySelector('.popup__button_type_create')

function elementEditHandler() {
  popupOpen(popupElement);//
  nameOfNewElement.value = ''
  linkOfNewElement.value = ''
  nameOfNewElement.dispatchEvent(new Event('input'));
  linkOfNewElement.dispatchEvent(new Event('input'));
  popupButtonToCreateNewElement.classList.add('popup__button_disabled');

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







