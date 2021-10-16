const popup = document.querySelector('.popup');
const profileInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popupButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_type_name');
const profile = document.querySelector('.profile__name');
const job = document.querySelector('.popup__input_type_job');
const myStatus = document.querySelector('.profile__status');

//вносим данные из профиля в поля ввода//
function popupOpen() {
    popup.classList.add('popup_open');
    nameField.value = profile.textContent;
    job.value = myStatus.textContent;
}
function popupClose() { popup.classList.remove('popup_open') }

profileInfo.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);

/*переносим данные из полей ввода в профиль*/
function submitForm(event) {
    event.preventDefault()
    profile.textContent = nameField.value;
    myStatus.textContent = job.value;
    popupClose();
}

form.addEventListener('submit', submitForm)


/*это чтобы закрывался попап не только после нажатия на крестик*/
function banana(event) {
    if (event.target.classList.contains('popup')) {
        popupClose();
    }
}
popup.addEventListener('click', banana);
popup.addEventListener('mouseup', banana);



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

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

//Сразу добавляем карточки при запуске страниці//
//в исходном шаблоне свяжу характеристики  объектов с содержимым страницы и клонирую через cloneNode(тру). Можно циклом, но наставник запретил//
/*initialCards.forEach((item) => {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__name').textContent = item.name;
    element.querySelector('.element__image').src = item.link;
    elements.append(element);

});*/

/*а можно и так*/
initialCards.forEach(createElements);
function createElements(La_Li_Lu_Le_Lo) {
    const element = cardTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__name').textContent = La_Li_Lu_Le_Lo.name;
    element.querySelector('.element__image').src = La_Li_Lu_Le_Lo.link;
    element.querySelector('.element__delete').addEventListener('click', (ev) => {
        ev.target.closest('.element').remove()
    })
    element.querySelector('.element__reaction').addEventListener('click', (ev) => {
        ev.target.classList.toggle('element__reaction_like')
    })
    elements.append(element);
    element.querySelector('.element__image').addEventListener('click', popupOpenImage);

};

/*функция с удаление карточек, сделал так изначально*/
/*function deletess(event) {
    event.target.closest('.element').remove();
    
}
Array.from(document.querySelectorAll('.element__delete')).forEach((el) => 
el.addEventListener('click', deletess));*/


/*функция с заменой сердечек сделал так изначально*/
/*function heart(event) {
    event.target.classList.toggle('element__reaction_like');
    
}
/*сердечек много, нужен массив*/
/*Array.from(document.querySelectorAll('.element__reaction')).forEach((el) => 
el.addEventListener('click', heart));*/



//////////////////////////////////////////////////////
//открываем и закрываем попап, по аналогии с тем, что касается профиля
const addButtonPlace = document.querySelector('.profile__add');
const addNewCard = document.querySelector('.popup_type_element');
const closeInfoCard = document.querySelector('.popup__close_type_element')

function popupOpenPlace() {
    addNewCard.classList.add('popup_open');
}

function popupClosePlace() {
    addNewCard.classList.remove('popup_open');
}

addButtonPlace.addEventListener('click', popupOpenPlace);
closeInfoCard.addEventListener('click', popupClosePlace);

function banana2(event) {
    if (event.target.classList.contains('popup')) {
        popupClosePlace();
    }
}
//закрываем попап не только по крестику
addNewCard.addEventListener('mouseup', banana2);
addNewCard.addEventListener('click', banana2);

//начинаем создавать новые карточки
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
    element.querySelector('.element__image').addEventListener('click', popupOpenImage);
    elements.prepend(element);
    event2.preventDefault();
    popupClosePlace();
};

const buttonToCreate = document.querySelector('.popup__button_type_create');
buttonToCreate.addEventListener('click', addNewElement)


//////////////////////////////теперь последний попап с картинкой
const imagePush = document.querySelector('.element__image');
const showBigImage = document.querySelector('.popup_type_image');
const imageInsidePopup = document.querySelector('.popup__img');
const imageClosebutton = document.querySelector('.popup__close_type_img');
const imageInformation = document.querySelector('.image-info')
//создаю карточку
function popupOpenImage(evt) {
    const showBigImage = document.querySelector('.popup_type_image');
    showBigImage.classList.add('popup_open');
    imageInsidePopup.src = evt.target.src;
    imageInformation.textContent = evt.target.parentElement.querySelector('.element__name').textContent;
}

function popupCloseLargeImage() {
    showBigImage.classList.remove('popup_open');
}
imageClosebutton.addEventListener('click', popupCloseLargeImage);
//вешаю обработчик на все карточки
/*Array.from(document.querySelectorAll('.element__image')).forEach((el) =>
    el.addEventListener('click', popupOpenImage));*/




