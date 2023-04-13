import Popup from "./Popup";

export default class PopupConfirm extends Popup {
    constructor(popupSelector, deleteCard) {
        super(popupSelector);
        this._handleSubmit = deleteCard;
        this._subminBtn = this._popup.querySelector('.popup__submit');
    }

    open(cardId, card) {
        this._cardId = cardId;
        this.card = card;
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._subminBtn.addEventListener('click', () => {
            this._handleSubmit(this._cardId);
            this.card.deleteCard();
            this.close();
        })
    }
}