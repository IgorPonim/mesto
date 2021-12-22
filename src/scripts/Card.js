

export class Card {
  constructor(data, template, handleCardClick, sendLike, deleteLike, id) {
    this._name = data.name,
      this._link = data.link,
      this._template = template;
    this._likes = data.likes
    this._popupImage = document.querySelector('.popup_type_image');
    this._imageInsidePopup = this._popupImage.querySelector('.image-container__img');
    this._imageInformation = this._popupImage.querySelector('.image-container__info')
    this._handleCardClick = handleCardClick//это просто метод popup.open, который работает через стрелочную функцию....
    this._sendLike = sendLike
    this._deleteLike = deleteLike
    this._mainTemplate = this._getTemplate()
    this.isLiked = data.isLiked;
    this._buttonLike = this._mainTemplate.querySelector('.element__reaction')
    this._id = data._id;
    this._userId = id;
    this._amountOfLikes = this._mainTemplate.querySelector('.element__reaction-amount')

  }

  //выбрал свой шаблон
  _getTemplate() {
    return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  }

  //открываю попап с картинкой// в ПР 7 делал так, теперь эта функция делегирована в popupwithImage
  /*_popupOpenImage() {
    this._imageInsidePopup.src = this._link
    this._imageInformation.textContent = this._name
    this._imageInsidePopup.alt = this._name
    popupOpen(this._popupImage);
  }*/

  //универсальный метод создания карточки
  createElement() {

    this._elementImage = this._mainTemplate.querySelector('.element__image');
    this._elementImage.src = this._link
    this._elementImage.alt = this._name
    this._mainTemplate.querySelector('.element__name').textContent = this._name
    this._setEventListener();



    return this._mainTemplate
  }

  _handeLikeClick() {
    const checkLike = this._likes.some(({ _id }) => _id === this._userId); //проверю есть ли мои лайки
    if (checkLike === true) {
      this._deleteLike(this._id).then(this._updateLikes).catch((err) => console.log(err));
    } else {
      this._sendLike(this._id).then(this._updateLikes).catch((err) => console.log(err));
    }
  }
  _handeDeleteClick() {
    this._mainTemplate.remove()
    this._mainTemplate = null
  }

  _updateLikes = ({ likes }) => {//объектный литерал
    this._buttonLike.classList.toggle('element__reaction_like');

    this._likes = likes;
    this._amountOfLikes.textContent = this._likes.length;
  }

  //вешаю слушатели
  _setEventListener() {
    this._buttonLike.addEventListener('click', (ev) => {
      this._handeLikeClick(ev)
    })
    this._mainTemplate.querySelector('.element__delete').addEventListener('click', (ev) => {
      this._handeDeleteClick(ev)
    })
    this._elementImage.addEventListener('click', () => { this._handleCardClick() })
    const checkLike = this._likes.some(({ _id }) => _id === this._userId);
    if (checkLike === true) {
      this._buttonLike.classList.add('element__reaction_like');
    }
    this._amountOfLikes.textContent = this._likes.length;
  }
}
