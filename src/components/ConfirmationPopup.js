import { Popup } from "./Popup.js";

export class ConfirmationPopup extends Popup {
  constructor(popup) {
    super(popup);
    this._popupMegaUltraButton = this._popup.querySelector('.popup__button')
    this._elementDeleteButton = this._popup.querySelector('.popup__button_type_confirm');
    this._popupMegaUltraButtonInnerText = this._popupMegaUltraButton.textContent
  }

  _deleteConfirm = (ev) => {
    ev.preventDefault()
    this._handleDelete();

  }

  setEventListeners() {
    super.setEventListeners();
    this._elementDeleteButton.addEventListener('click', this._deleteConfirm);
  }

  open(confirm) {
    this._handleDelete = confirm
    super.open();


  }
  renderLoading(isLoading) {
    // тут устанавливаете текст кнопке
    this._popupMegaUltraButton.textContent = isLoading ? 'Сохранение...' : this._popupMegaUltraButtonInnerText;
  }
}





