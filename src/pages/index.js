import '../pages/index.css';
import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import initialCards from '../utils/initialCards.js'
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { settingsValidation } from '../utils/constants.js';
import Api from '../components/Api.js'
import PopupConfirm from '../components/PopupConfirm';

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const buttonOpenPopopAvatar = document.querySelector('.profile__avatar');
const nameInput = document.querySelector('.popup__text-input_content_name');
const jobInput = document.querySelector('.popup__text-input_content_job');
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
        authorization: 'ed0399b7-ebdf-4a38-88ea-fec0aabc8446',
        'Content-Type': 'application/json'
    }
})

let initialCardsList


const profilePopup = new PopupWithForm('.profile-popup', handleFormSubmitProfile);
const popupAddPlace = new PopupWithForm('.popup_function_add-place', handleFormSubmitAddPlace);
const popupAvatar = new PopupWithForm('.popup-avatar', handleFormSubmitAvatar);
const popupPhoto = new PopupWithImage('.popup-photo');
const popupConfirm = new PopupConfirm('.popup-remove-card', deleteCard);
const userProfileInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__name-description', profileAvatarSelector: '.profile__avatar' });

let userId

function initializationPage() {
    api.getProfileInfo()
        .then((result) => {
            userProfileInfo.setUserInfo(result);
            userProfileInfo.setAvatar(result);
            userId = result._id;
            api.getInitialCards()
                .then((result) => {
                    const cardList = new Section({
                        items: result,
                        renderer: (item) => {
                            const cardElement = createCard(item);
                            cardList.addItem(cardElement);
                        }
                    }, '.places__elements');
                    cardList.renderItems();
                    initialCardsList = cardList;
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        });
}
initializationPage();

profilePopup.setEventListeners();
popupAddPlace.setEventListeners();
popupPhoto.setEventListeners();
popupAvatar.setEventListeners();
popupConfirm.setEventListeners();


buttonOpenPopupProfile.addEventListener('click', () => {
    const userInfo = userProfileInfo.getUserInfo();
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.job;
    formValidators['popup-profile'].resetValidation();
    profilePopup.open();
})

buttonOpenPopupAddPlace.addEventListener('click', () => {
    formValidators["popup-add-place"].resetValidation();
    popupAddPlace.open();
})

buttonOpenPopopAvatar.addEventListener('click', () => {
    formValidators['popup-avatar'].resetValidation();
    popupAvatar.open();
})

function createCard(item) {
    const id = item._id;
    const card = new Card(
        item,
        '#places-template',
        handleCardClick,
        () => openConfirmDelete(id, card),
        addLike,
        removeLike,
        userId)
    return card.generateCard()
}


function handleFormSubmitProfile(inputValues, buttonSubmit) {
    buttonSubmit.textContent = 'Сохранение...';
    api.setProfileInfo(inputValues)
        .then((result) => {
            userProfileInfo.setUserInfo(result);
            buttonSubmit.textContent = 'Сохранить';
        })
        .catch((err) => {
            console.log(err);
        });
}

function handleFormSubmitAvatar(inputValues, buttonSubmit) {
    buttonSubmit.textContent = 'Сохранение...';
    api.changeAvatar(inputValues)
        .then((result) => {
            userProfileInfo.setAvatar(inputValues);
            buttonSubmit.textContent = 'Сохранить';
        })
        .catch((err) => {
            console.log(err);
        });
}

function addLike(cardId) {
    return api.addLike(cardId)
        .then((result) => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function removeLike(cardId) {
    return api.removeLike(cardId)
        .then((result) => {
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}


function deleteCard(cardId, card) {
    return api.deleteCard(cardId)
        .then((result) => {
            card.deleteCard();
            return result
        })
        .catch((err) => {
            console.log(err);
        })
}

function openConfirmDelete(id, card) {
    popupConfirm.open(id, card);
}

function handleCardClick(name, link) {
    popupPhoto.open(name, link);
}
function handleFormSubmitAddPlace(inputValues, buttonSubmit) {
    buttonSubmit.textContent = 'Сохранение...';
    api.addNewCard(inputValues)
        .then((result) => {
            initialCardsList.addItem(createCard(result))
            popupAddPlace.close();
            buttonSubmit.textContent = 'Создать';
        })
        .catch((err) => {
            console.log(err);
        })
}

const formValidators = {};
const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        const validator = new FormValidator(config, formElement);
        const formName = formElement.getAttribute('name');

        formValidators[formName] = validator;
        validator.enableValidation();
    });
}

enableValidation(settingsValidation);


