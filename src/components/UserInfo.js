export default class UserInfo {
    constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._job = document.querySelector(profileJobSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }

    setUserInfo(inputValues) {
        this._name.textContent = inputValues.name;
        this._job.textContent = inputValues.about;
    }

    setAvatar(url) {
        this._avatar.style.backgroundImage = `url(${url.avatar})`;
    }
}