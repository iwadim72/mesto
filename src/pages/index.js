import '../pages/index.css';
import { settingsValidation, FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import initialCards from '../components/initialCards.js'
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const nameInput = document.querySelector('.popup__text-input_content_name');
const jobInput = document.querySelector('.popup__text-input_content_job');

const initialCardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const cardElement = new Card(item, '#places-template', handleCardClick).generateCard();
        initialCardsList.addItem(cardElement);
    }
}, '.places__elements')

const profilePopup = new PopupWithForm('.profile-popup', handleFormSubmitProfile);
const popupAddPlace = new PopupWithForm('.popup_function_add-place', handleFormSubmitAddPlace);
const popupPhoto = new PopupWithImage('.popup-photo');
const userProfileInfo = new UserInfo({ profileNameSelector: '.profile__name', profileJobSelector: '.profile__name-description' });

profilePopup.setEventListeners();
popupAddPlace.setEventListeners();
popupPhoto.setEventListeners();
initialCardsList.renderItems();

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


function createCard(item) {
    return new Card(item, '#places-template', handleCardClick).generateCard();
}


function handleFormSubmitProfile(evt, inputValue) {
    evt.preventDefault();
    userProfileInfo.setUserInfo(inputValue);
}

function handleCardClick(name, link) {
    popupPhoto.open(name, link);
}
function handleFormSubmitAddPlace(evt, inputValue) {
    evt.preventDefault();
    initialCardsList.addItem(createCard(inputValue));
    popupAddPlace.close();
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

