import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.popup__text-input');
    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputValues() {
        const inputsValues = {};
        this._inputs.forEach((input) => {
            inputsValues[input.getAttribute('name')] = input.value;
        })
        return inputsValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const buttonSubmit = this._popup.querySelector('.popup__submit');
            this._formSubmit(this._getInputValues(), buttonSubmit);
            this.close();
        });
    }


}