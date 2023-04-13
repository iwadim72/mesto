export default class Card {
    constructor(item, templateSelector, handleCardClick, deleteCard, addLike, removeLike, userId) {
        this._name = item.name;
        this._link = item.link;
        this._likesCounter = item.likes;
        this._cardId = item._id;
        this._cardOwner = item.owner._id;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._deleteCard = deleteCard;
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
        this._deleteCard();
    }

    _handleSwitchLike() {
        if (this._cardLike.classList.contains('places__like_active')) {
            this._removeLike(this._cardId)
                .then((res) => {
                    this._cardLikesCounter.textContent = res.likes.length;
                    this._cardLike.classList.remove('places__like_active');
                })
                .catch((err) => {
                    console.log(err);
                });

        }
        else {
            this._addLike(this._cardId)
                .then((res) => {
                    this._cardLikesCounter.textContent = res.likes.length;
                    this._cardLike.classList.add('places__like_active');
                })
                .catch((err) => {
                    console.log(err);
                });
        }

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

    deleteCard() {
        this._element.remove();
    }

    generateCard() {
        this._element = this._getTemplate();
        this._cardPhoto = this._element.querySelector('.places__photo');
        this._cardLike = this._element.querySelector('.places__like');
        this._cardLikesCounter = this._element.querySelector('.places__like-counter');
        this._buttonDeleteCard = this._element.querySelector('.places__delete');
        if (this._cardOwner === this._userId) {
            console.log('привет');
            this._buttonDeleteCard.style['display'] = 'block';
        }
        this._setEventListeners();

        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardLikesCounter.textContent = this._likesCounter.length;
        if (this._likesCounter.length > 0) {
            this._likesCounter.forEach((user) => {
                if (user._id === this._userId) {
                    this._cardLike.classList.add('places__like_active');
                }
            })
        }
        this._element.querySelector('.places__name').textContent = this._name;

        return this._element;
    };
}

