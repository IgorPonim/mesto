export class UserInfo {
  constructor({ name, job }) {
    this._name = name
    this._job = job

  }

  getUserInfo() {
    const name = this._name.textContent;
    const job = this._job.textContent;
    return { name, job };
  }

  setUserInfo({ name, job }) {
    this._name.textContent = name;
    this._job.textContent = job;

  }
}
