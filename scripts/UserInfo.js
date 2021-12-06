export class UserInfo {
  constructor({ name, job }) {
    this._name = name
    this._job = job

  }

  getUserInfo() {
    return {
     name : this._name.textContent,//собираю исходные данные
     job : this._job.textContent
    }
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;

  }
}
