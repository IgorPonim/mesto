enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});

///описываю работу фабрики
function enableValidation(validationConfig) {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]
  forms.forEach((form) => setFormListeners(form, validationConfig))

}

//устанавливаю слушателей для инпутов
function setFormListeners(form, config) {
  const inputs = [...form.querySelectorAll(config.inputSelector)]

  inputs.forEach(el => {
    el.addEventListener('input', () =>
      handlerFielValidation(el, form, config))

    form.addEventListener('input', () => toggleButtonState(form, config))

  })
}
//создаю функцию работы/неработы кнопки, в зависимости от статуса валидации инпутов
function toggleButtonState(form, config) {

  const button = form.querySelector(config.submitButtonSelector)
  button.disabled = form.checkValidity();//вернет true если пройдет проверку

  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())//если валидация false меняет класс на белую кнопку
  button.toggleAttribute('disabled');

}


//создаю функцию показа/скрытия ошибок
function handlerFielValidation(input, form, config) {
  if (!input.validity.valid) {
    showErrorMessage(input, form, config)
  }
  else {
    hideErrorMessage(input, form, config);
  }
}


//функция описания содержимого ошибки, через добавление класса
function showErrorMessage(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);//нашел свои span-ы
  input.classList.add(config.inputErrorClass)
  errorElement.textContent = input.validationMessage//беру стандартный текст, который дает браузер
  errorElement.classList.add(config.errorClass);


}
function hideErrorMessage(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass)
  errorElement.textContent = ''
  errorElement.classList.remove(config.errorClass);

}





