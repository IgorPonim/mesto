import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
  open(data) {
    this._imageInsidePopup = this._popup.querySelector('.image-container__img');
    this._imageInformation = this._popup.querySelector('.image-container__info')


    this._imageInsidePopup.src = data.link
    this._imageInformation.textContent = data.name
    this._imageInsidePopup.alt = data.name
    super.open()
  }
}
