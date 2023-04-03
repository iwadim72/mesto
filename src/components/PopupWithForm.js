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
        const inputsValue = {};
        this._inputs.forEach((input) => {
            inputsValue[input.getAttribute('name')] = input.value;
        })
        return inputsValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit(this._getInputValues());
            this.close();
        });
    }


}