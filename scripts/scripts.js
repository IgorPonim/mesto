const popup = document.querySelector('.popup');
const profileInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popupButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__input_name');
const profile = document.querySelector('.profile__name');
const job = document.querySelector('.popup__input_job');
const myStatus = document.querySelector('.profile__status');


function popupOpen() { popup.classList.add('popup_open') }
function popupClose() { popup.classList.remove('popup_open') }

profileInfo.addEventListener('click', popupOpen);
//я надеюсь вас правильно понял?//
profile.textContent = nameField.value;
myStatus.textContent = job.value;
popupCloseButton.addEventListener('click', popupClose);



function submitForm(event) {
    event.preventDefault()
    profile.textContent = nameField.value;
    myStatus.textContent = job.value;
    popupClose();
}


form.addEventListener('submit', submitForm)

