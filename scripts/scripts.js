const popup = document.querySelector('.popup');
const ProfileInfo = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popupButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');
const nameField = document.querySelector('.popup__inputName');
const Profile = document.querySelector('.profile__name');
const Job = document.querySelector('.popup__inputJob');
const Status = document.querySelector('.profile__status');
/*const LikeHeart = document.querySelector('.element__reaction')  /// это с массивами не работает */

/*мы еще не проходили forEach, помог разобраться старший студент*/
function heart(ev) {
    ev.target.classList.toggle('element__reaction_like');
}
Array.from(document.querySelectorAll('.element__reaction')).forEach((el) => el.addEventListener('click', heart));


function popupOpen() { popup.classList.add('popup_open') }
function popupClose() { popup.classList.remove('popup_open') }

ProfileInfo.addEventListener('click', popupOpen)
popupCloseButton.addEventListener('click', popupClose)
popupButton.addEventListener('click', popupClose)


function submitForm(event) {
    event.preventDefault()
    Profile.textContent = nameField.value;
    Status.textContent = Job.value;
    popupClose();

}

form.addEventListener('submit', submitForm)

/*я так и не понял изз задания нужно єто через js делать или css*/
let string = document.querySelector('.profile__name').textContent
let shortText = string.substring(10, string.length - 255);
document.querySelector('.profile__name').textContent = shortText + "...";
