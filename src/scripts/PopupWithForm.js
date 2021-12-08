import { Popup } from "./Popup.js";
import { FormValidator } from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this._submitCallback = submitCallback;
    this._inputs = [...this._popup.querySelectorAll('.popup__input')]//собираю массив инпутов
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
    this._popup.querySelector('.popup__form').addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());//
      this.close()
    });
  }
}




