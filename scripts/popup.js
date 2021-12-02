export class Popup {
  constructor(popup) {
    this._popup = popup

  }
  close() {
    this._popup.classList.remove('popup_open')
    document.removeEventListener('keydown', this._handleEscClose)
  }
  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose)
  }




  _handleEscClose(evt) {
    if (evt.key === 'Escape') {

      this.close()
    }
  }

  setEventListeners() {

    this._popup.querySelector('.popup__open').addEventListener('click', this.close())

  }

}
