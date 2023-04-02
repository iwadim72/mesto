import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    _getInputValues() {
        const inputs = this._popup.querySelectorAll('.popup__text-input');
        this._inputsValue = {};
        inputs.forEach((input) => {
            this._inputsValue[input.getAttribute('name')] = input.value;
        })
        return this._inputsValue;
    }

    setEventListeners() {
        const popupSubmitButton = this._popup.querySelector('.popup__submit');
        super.setEventListeners();
        popupSubmitButton.addEventListener('click', (evt) => {
            this._getInputValues();
            this._formSubmit(evt, this._inputsValue);
            this.close();
        });
    }


}