import { Popup } from "./popup.js";
import { FormValidator } from "./FormValidator.js";

export class PopupWithForm extends Popup {
  constructor(popup, submitCallback) {

    super(popup);
    this._submitCallback = submitCallback;
  }
  close() {
    super.close();

  }
  //все как в задании - сделал новый массив из данных инпутов
  _getInputValues(){
    const inputs = [...this._popup.querySelectorAll('.popup__input')]
    const inputValue = {};

    inputs.map(({ name, value }) => {
      inputValue[name] = value;
    })

    return inputValue;
  }
//повесил слушатель на кнопку
  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__form').addEventListener('submit',  (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
      this.close()
    });
}
  }




