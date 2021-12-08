

export class Card {
  constructor(data, template, handleCardClick) {
    this._name = data.name,
      this._link = data.link,
      this._template = template;
    this._popupImage = document.querySelector('.popup_type_image');
    this._imageInsidePopup = this._popupImage.querySelector('.image-container__img');
    this._imageInformation = this._popupImage.querySelector('.image-container__info')
    this._handleCardClick = handleCardClick//это просто метод popup.open, который работает через стрелочную функцию....
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
    this._mainTemplate = this._getTemplate()
    this._elementImage = this._mainTemplate.querySelector('.element__image');
    this._elementImage.src = this._link
    this._elementImage.alt = this._name
    this._mainTemplate.querySelector('.element__name').textContent = this._name
    this._setEventListener();
    return this._mainTemplate
  }

  _handeLikeClick(ev) {//могу я использовать творческий подход?
    ev.target.classList.toggle('element__reaction_like')
  }
  _handeDeleteClick() {
    this._mainTemplate.remove()//все как вы сказали
    this._mainTemplate = null //когда вы говорите 'зануллить' - это это?
  }



  //вешаю слушатели
  _setEventListener() {
    this._mainTemplate.querySelector('.element__reaction').addEventListener('click', (ev) => {
      this._handeLikeClick(ev)
    })
    this._mainTemplate.querySelector('.element__delete').addEventListener('click', (ev) => {
      this._handeDeleteClick(ev)
    })
    this._elementImage.addEventListener('click', () => { this._handleCardClick() })
  }
}
