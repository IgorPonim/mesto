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

/*функция с заменой сердечек*/
function heart(event) {
    event.target.classList.toggle('element__reaction_like');
}
/*сердечек много, нужен массив*/
Array.from(document.querySelectorAll('.element__reaction')).forEach((el) => el.addEventListener('click', heart));

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


//Сразу добавляем карточки при запуске страниці//
function addElement() {

    for (let i = 0; i < initialCards.length; i += 1) {
        let firstMassive = initialCards[i];
        const name = firstMassive.name;
        const link = firstMassive.link;
        createElement(name, link);
    }
}

