import { popupOpen } from './scripts.js';
//конструктор содержит в себе шаблон и настройки
export class Card {
  constructor(data, template) {
    this._name = data.name,
      this._link = data.link,
      this._template = template;
  }

  //выбрал свой шаблон
  _getTemplate() {
    return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  }

  //открываю попап с картинкой
  _popupOpenImage() {
    this._popupImage = document.querySelector('.popup_type_image');
    this._imageInsidePopup = this._popupImage.querySelector('.image-container__img');
    this._imageInformation = this._popupImage.querySelector('.image-container__info')
    this._imageInsidePopup.src = this._link
    this._imageInformation.textContent = this._name
    this._imageInsidePopup.alt = this._name
    popupOpen(this._popupImage);
  }
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
  //вешаю слушатели
  _setEventListener() {
    this._mainTemplate.querySelector('.element__reaction').addEventListener('click', (ev) => {
      ev.target.classList.toggle('element__reaction_like')
    })
    this._mainTemplate.querySelector('.element__delete').addEventListener('click', (ev) => {
      ev.target.closest('.element').remove()
    })
    this._mainTemplate.querySelector('.element__image').addEventListener('click', () => { this._popupOpenImage() })
  }
}
