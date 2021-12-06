import { Popup } from "./popup.js";
import { FormValidator } from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {
    super(popup);
    this._submitCallback = submitCallback;
    this._inputs = [...this._popup.querySelectorAll('.popup__input')]//собираю массив инпутов
  }

  //все как в задании - сделал новый массив из данных инпутов
  _getInputValues() {
    let allValues = {};
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
      this._submitCallback(this._getInputValues());//а теперь в index.js я использую функцию Калбек//все по заветам наставника
      this.close()
    });
  }
}




