export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._job = document.querySelector(profileJobSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }

    setUserInfo(inputValues) {
        this._name.textContent = inputValues.name;
        this._job.textContent = inputValues.job;
    }
}