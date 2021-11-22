export class FormValidator {
  constructor(validationConfig, form) {
    this._form = form;
    this._validationConfig = validationConfig;
  }


  _checkInputValidity(input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);

    if (!input.validity.valid) {
      this._showInputError(input, inputError);
    } else {
      this._hideInputError(input, inputError);
    }
  }


  _showInputError(input, inputError) {
    input.classList.add(this._validationConfig.inputErrorClass);
    inputError.textContent = input.validationMessage;
    inputError.classList.add(this._validationConfig.errorClass);
  }

  _hideInputError(input, inputError) {
    input.classList.remove(this._validationConfig.inputErrorClass);
    inputError.textContent = '';
    inputError.classList.remove(this._validationConfig.errorClass);
  }

  //выбрал всеинпуты и повесил на них проверку валидации
  _setFormListeners() {
    const inputs = [...this._form.querySelectorAll(this._validationConfig.inputSelector)]

    inputs.forEach(input => {
      input.addEventListener('input', () =>
        this._checkInputValidity(input))
    })

    this._form.addEventListener('input', () => this._toggleButtonState())
  }


  _toggleButtonState() {
    const button = this._form.querySelector(this._validationConfig.submitButtonSelector)
    button.disabled = this._form.checkValidity();//вернет true если пройдет проверку
    button.classList.toggle(this._validationConfig.inactiveButtonClass, !this._form.checkValidity())//если валидация false меняет класс на белую кнопку
    button.toggleAttribute('disabled');
  }

  enableValidation() {

    this._setFormListeners()
    this._toggleButtonState()

  }

}


/*это старый код, используя наработки сделал класс
///описываю работу фабрики
enableValidation(validationConfig) {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]
  forms.forEach((form) => setFormListeners(form, validationConfig))

}

//устанавливаю слушателей для инпутов
setFormListeners(form, validationConfig) {
  const inputs = [...form.querySelectorAll(validationConfig.inputSelector)]

  inputs.forEach(input => {
    input.addEventListener('input', () =>
      handlerFielValidation(input, form, validationConfig))

    form.addEventListener('input', () => toggleButtonState(form, validationConfig))

  })
}

//создаю функцию показа/скрытия ошибок
handlerFielValidation(input, form, validationConfig) {
  if (!input.validity.valid) {
    showErrorMessage(input, form, validationConfig)
  }
  else {
    hideErrorMessage(input, form, validationConfig);
  }
}

//создаю функцию работы/неработы кнопки, в зависимости от статуса валидации инпутов
toggleButtonState(form, validationConfig) {

  const button = form.querySelector(validationConfig.submitButtonSelector)
  button.disabled = form.checkValidity();//вернет true если пройдет проверку

  button.classList.toggle(validationConfig.inactiveButtonClass, !form.checkValidity())//если валидация false меняет класс на белую кнопку
  button.toggleAttribute('disabled');

}

//функция описания содержимого ошибки, через добавление класса
showErrorMessage(input, form, validationConfig) {
  const errorElement = form.querySelector(`#${input.id}-error`);//нашел свои span-ы
  input.classList.add(validationConfig.inputErrorClass)
  errorElement.textContent = input.validationMessage//беру стандартный текст, который дает браузер
  errorElement.classList.add(validationConfig.errorClass);


}
hideErrorMessage(input, form, validationConfig) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass)
  errorElement.textContent = ''
  errorElement.classList.remove(validationConfig.errorClass);

}
}
*///
