export class UserInfo {
  constructor({ name, job, avatar }) {
    this._name = name
    this._job = job
    this._avatar = avatar

  }

  getUserInfo() {
    return {
      name: this._name.textContent,//собираю исходные данные
      job: this._job.textContent
    }
  }

  setUserInfo({ name, about, avatar, _id }) { //раньше второй аргумент был job теперь about, ибо так настроили сервер
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = avatar;
    this.id = _id;
  }
}
