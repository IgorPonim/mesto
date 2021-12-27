import { Popup } from "./Popup.js";
import { FormValidator } from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this._submitCallback = submitCallback;
    this._inputs = [...this._popup.querySelectorAll('.popup__input')]//собираю массив инпутов
    this._form = this._popup.querySelector('.popup__form')
    this._popupMegaUltraButton = this._popup.querySelector('.popup__button')
    this._popupMegaUltraButtonInnerText = this._popupMegaUltraButton.textContent
  }

  //все как в задании - сделал новый массив из данных инпутов
  _getInputValues() {
    const allValues = {};
    this._inputs.map((input) => {
      allValues[input.name] = input.value;
    })

    return allValues;
  }
  //повесил слушатель на кнопку
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());//
    });
  }

  close() {
    super.close()
    this._form.reset()
  }

  renderLoading(isLoading) {
    // тут устанавливаете текст кнопке
    this._popupMegaUltraButton.textContent = isLoading ? 'Сохранение...' : this._popupMegaUltraButtonInnerText;
  }

}
