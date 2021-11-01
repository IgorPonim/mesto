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
function setFormListeners(form, validationConfig) {
  const inputs = [...form.querySelectorAll(validationConfig.inputSelector)]

  inputs.forEach(input => {
    input.addEventListener('input', () =>
      handlerFielValidation(input, form, validationConfig))

    form.addEventListener('input', () => toggleButtonState(form, validationConfig))

  })
}

//создаю функцию показа/скрытия ошибок
function handlerFielValidation(input, form, validationConfig) {
  if (!input.validity.valid) {
    showErrorMessage(input, form, validationConfig)
  }
  else {
    hideErrorMessage(input, form, validationConfig);
  }
}

//создаю функцию работы/неработы кнопки, в зависимости от статуса валидации инпутов
function toggleButtonState(form, validationConfig) {

  const button = form.querySelector(validationConfig.submitButtonSelector)
  button.disabled = form.checkValidity();//вернет true если пройдет проверку

  button.classList.toggle(validationConfig.inactiveButtonClass, !form.checkValidity())//если валидация false меняет класс на белую кнопку
  button.toggleAttribute('disabled');

}

//функция описания содержимого ошибки, через добавление класса
function showErrorMessage(input, form, validationConfig) {
  const errorElement = form.querySelector(`#${input.id}-error`);//нашел свои span-ы
  input.classList.add(validationConfig.inputErrorClass)
  errorElement.textContent = input.validationMessage//беру стандартный текст, который дает браузер
  errorElement.classList.add(validationConfig.errorClass);


}
function hideErrorMessage(input, form, validationConfig) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(validationConfig.inputErrorClass)
  errorElement.textContent = ''
  errorElement.classList.remove(validationConfig.errorClass);

}





