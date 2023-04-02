import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._capture = this._popup.querySelector('.popup-photo__capture');
        this._photoName = this._popup.querySelector('.popup-photo__capture-name');
    }

    open(name, link) {
        this._capture.src = link;
        this._capture.alt = name;
        this._photoName.textContent = name;
        super.open();
    }
}