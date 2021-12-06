export class Popup {
  constructor(popup) {
    this._popup = popup
  }

  close() {
    this._popup.classList.remove('popup_open')
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt))//без стрелочной функции не работает. Почему? непонятно...
  }

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  _handleEscClose(Event) {
    if (Event.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {//хитроумная конструкция, решил сохранить с предыдущей ПР7
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_open')) {
        this.close()
      }
      if (evt.target.classList.contains('popup__close')) {
        this.close()
      }
    })
  }
}
