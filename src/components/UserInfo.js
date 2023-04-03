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

    setUserInfo(inputsValues) {
        this._name.textContent = inputsValues.name;
        this._job.textContent = inputsValues.job;
    }
}