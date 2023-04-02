class Card {
    constructor(item, templateSelector, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.places__element')
            .cloneNode(true);

        return cardElement;
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handleSwitchLike() {
        this._cardLike.classList.toggle('places__like_active');
    }

    _setEventListeners() {
        this._cardPhoto.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        this._cardLike.addEventListener('click', () => {
            this._handleSwitchLike();
        });
        this._buttonDeleteCard.addEventListener('click', () => {
            this._handleDeleteCard();
        });
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardPhoto = this._element.querySelector('.places__photo');
        this._cardLike = this._element.querySelector('.places__like');
        this._buttonDeleteCard = this._element.querySelector('.places__delete');
        this._setEventListeners();

        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._element.querySelector('.places__name').textContent = this._name;

        return this._element;
    };
}

export { Card };