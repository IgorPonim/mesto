export class Api {
  constructor({ adress, headers }) {
    this._adress = adress,
      this._headers = headers
  }

//сделал по вашей рекомендации
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    else return Promise.reject(`Ошибка ${res.status}`);
  }



  getInitialCards() {//метод загрузки исходных карточек
    return fetch(this._adress + '/cards', {
      headers: this._headers,
    }).then(this._checkResponse) //просто передал функцию, не вызвал, как вы сказали
  }

  getUserInfo() {//метод загрузки жака ива кусто
    return fetch(this._adress + '/users/me', {
      headers: this._headers,
    }).then(this._checkResponse)
  }

  editUserInfo(data) {//через метод patch дам возможность поменять имя пользователя
    return fetch(this._adress + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    }).then(this._checkResponse)
  }

  createCard({ name, link }) {
    return fetch(this._adress + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(this._checkResponse)
  }

  //// лайки
  sendLike = (cardId) => { //через стрелочную
    return fetch(this._adress + `/cards/${cardId}/likes/`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkResponse)
  }

  deleteLike = (cardId) => {
    return fetch(this._adress + `/cards/${cardId}/likes/`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse)
  }

  changeAvatar(avatar) {//через отправлю через patch ссылку на аватар
    return fetch(this._adress + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    }).then(this._checkResponse)
  }

  deleteСards = (cardId) => {
    return fetch(this._adress + `/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkResponse)
  }


}

