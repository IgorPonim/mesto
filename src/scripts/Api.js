export class Api {
  constructor({ adress, headers }) {
    this._adress = adress,
      this._headers = headers
  }
  getInitialCards() {//метод загрузки исходных карточек
    return fetch(this._adress + '/cards', {
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getUserInfo() {//метод загрузки жака ива кусто
    return fetch(this._adress + '/users/me', {
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editUserInfo(data) {//через метод patch дам возможность поменять имя пользователя
    return fetch(this._adress + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  createCard({ name, link }) {
    return fetch(this._adress + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  //// лайки
  sendLike = (cardId) => { //через стрелочную
    return fetch(this._adress + `/cards/${cardId}/likes/`, {
      method: 'PUT',
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  deleteLike = (cardId) => {
    return fetch(this._adress + `/cards/${cardId}/likes/`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  changeAvatar(avatar) {//через отправлю через patch ссылку на аватар
    return fetch(this._adress + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  deleteСards = (cardId) => {
    return fetch(this._adress + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }


}

