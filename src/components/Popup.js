export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickShadowClose(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        const buttonClose = this._popup.querySelector('.popup__close')
        this._popup.addEventListener('click', (evt) => {
            this._handleClickShadowClose(evt);
        });
        buttonClose.addEventListener('click', () => { this.close() });
    }
}