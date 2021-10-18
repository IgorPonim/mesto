const popup = document.querySelector('.popup');
const profileButtonInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const profileForm = document.querySelector('.popup__form');
const nameInputValue = document.querySelector('.popup__input_type_name');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.popup__input_type_job');
const myStatus = document.querySelector('.profile__status');

//вносим данные из профиля в поля ввода//
function popupOpen() {
    popup.classList.add('popup_open');
    nameInputValue.value = profileName.textContent;
    profileJob.value = myStatus.textContent;
}
function popupClose() { popup.classList.remove('popup_open') }

profileButtonInfo.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

/*переносим данные из полей ввода в профиль*/
function handleProfileSubmit(event) {
    event.preventDefault()
    profileName.textContent = nameInputValue.value;
    myStatus.textContent = profileJob.value;
    popupClose();
}

profileForm.addEventListener('submit', handleProfileSubmit)


/*это чтобы закрывался попап не только после нажатия на крестик*/
function closePopupByOverlay(event) {
    if (event.target.classList.contains('popup')) {
        popupClose();
        popupClosePlace();
    }
}
popup.addEventListener('click', closePopupByOverlay);




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
function createElements(data) {
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
    elements.append(element);
    element.querySelector('.element__image').addEventListener('click', popupOpenImage);

};
initialCards.forEach(createElements);

//////////////////////////////////////////////////////
//открываем и закрываем попап, по аналогии с тем, что касается профиля
const addButtonPlace = document.querySelector('.profile__add');
const newCard = document.querySelector('.popup_type_element');
const closeButtonInfoCard = document.querySelector('.popup__close_type_element')

function popupOpenPlace() {
    newCard.classList.add('popup_open');
}

function popupClosePlace() {
    newCard.classList.remove('popup_open');
}

addButtonPlace.addEventListener('click', popupOpenPlace);
closeButtonInfoCard.addEventListener('click', popupClosePlace);

//закрываем попап не только по крестику
newCard.addEventListener('click', closePopupByOverlay);

////////////////////////////////////////
////////////////////////////////////////
//дадим пользователю возможность добавить карточки
const nameOfNewElement = document.querySelector('.popup__input_type_name-element');
const linkOfNewElement = document.querySelector('.popup__input_type_link');
const elementReactionLike = document.querySelector('.element__reaction')
//это функция создания новой карточки, по аналогии с загрузкой исходных шести
function addNewElement(event2) {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__name').textContent = nameOfNewElement.value;
    element.querySelector('.element__image').src = linkOfNewElement.value;
    element.querySelector('.element__delete').addEventListener('click', (ev) => {
        ev.target.closest('.element').remove()
    });
    element.querySelector('.element__reaction').addEventListener('click', (ev) => {
        ev.target.classList.toggle('element__reaction_like')
    })
    element.querySelector('.element__image').alt = nameOfNewElement.value;
    element.querySelector('.element__image').addEventListener('click', popupOpenImage);
    elements.prepend(element);
    event2.preventDefault();
    popupClosePlace();

};

const buttonCreateCard = document.querySelector('.popup__button_type_create');
const popupFormImage = document.querySelector('.popup__form_type_image');
popupFormImage.addEventListener('submit', addNewElement)

//////////////////////////////теперь последний попап с картинкой
/*const imagePush = document.querySelector('.element__image');*/
const bigImage = document.querySelector('.popup_type_image');
const imageInsidePopup = document.querySelector('.image-container__img');
const imageCloseButton = document.querySelector('.popup__close_type_img');
const imageInformation = document.querySelector('.image-container__info')
//создаю карточку и переношу в нее ссылки на картинки и прочие атрибуты
function popupOpenImage(evt) {
    const bigImage = document.querySelector('.popup_type_image');
    bigImage.classList.add('popup_open');
    imageInsidePopup.src = evt.target.src;
    /* imageInformation.textContent = evt.target.parentElement.querySelector('.element__name').textContent;*/
    imageInformation.textContent = evt.target.closest('.element__image').alt
}


function popupCloseLargeImage() {
    bigImage.classList.remove('popup_open');
}
imageCloseButton.addEventListener('click', popupCloseLargeImage);




