export class Api {
  constructor({ adress, headers }) {
    this.adress = adress,
      this.headers = headers
  }
  getInitialCards() {//метод загрузки исходных карточек
    return fetch(this.adress + '/cards', {
      headers: this.headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getUserInfo() {//метод загрузки жака ива кусто
    return fetch(this.adress + '/users/me', {
      headers: this.headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  editUserInfo(data) {//через метод patch дам возможность поменять имя пользователя
    return fetch(this.adress + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  createCard ({ name, link }) {
    return fetch(this.adress + '/cards', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  //// лайки
  sendLike = (cardId)=> { //через стрелочную
    return fetch(this.adress + `/cards/${cardId}/likes/` , {
      method: 'PUT',
      headers: this.headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  deleteLike = (cardId) => {
    return fetch(this.adress + `/cards/${cardId}/likes/`  ,{
      method: 'DELETE',
      headers: this.headers,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  changeAvatar(avatar){//через отправлю через patch ссылку на аватар
    return fetch(this.adress + '/users/me/avatar', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

}

