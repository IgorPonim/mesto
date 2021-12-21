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

  createCard({name,link}) {
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


}

