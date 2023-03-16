import { settingsValidation, FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import initialCards from './initialCards.js'

const profilePopup = document.querySelector('.profile-popup');
const popupAddPlace = document.querySelector('.popup_function_add-place');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCapture = popupPhoto.querySelector('.popup-photo__capture');
const popupPhotoName = popupPhoto.querySelector('.popup-photo__capture-name');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const formProfile = document.forms['popup-profile'];
const formAddPlace = document.forms['popup-add-place'];
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__name-description');
const nameInput = document.querySelector('.popup__text-input_content_name');
const placeName = document.querySelector('.popup__text-input_content_place-name');
const placeUrl = document.querySelector('.popup__text-input_content_place-url');
const jobInput = document.querySelector('.popup__text-input_content_job');
const placesContainer = document.querySelector('.places__elements');


function addPlaceElement(cardElement) {
    placesContainer.prepend(cardElement);
}

function createCard(item) {
    return new Card(item, '#places-template', handleCardClick).generateCard();
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup(profilePopup);
}

function handleCardClick(name, link) {
    popupPhotoCapture.src = link;
    popupPhotoCapture.alt = name;
    popupPhotoName.textContent = name;
    openPopup(popupPhoto);
}

const handleFormSubmitAddPlace = (evt) => {
    evt.preventDefault();
    const inputValue = {
        name: placeName.value,
        link: placeUrl.value
    }
    addPlaceElement(createCard(inputValue));
    closePopup(popupAddPlace);
}

initialCards.forEach((element) => {
    addPlaceElement(createCard(element));
})


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

buttonOpenPopupProfile.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    formValidators['popup-profile'].resetValidation();
    openPopup(profilePopup);
})

buttonOpenPopupAddPlace.addEventListener('click', () => {
    formAddPlace.reset();
    formValidators["popup-add-place"].resetValidation();
    openPopup(popupAddPlace);
})

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePopup(popup);
        }
    })
    button.addEventListener('click', () => closePopup(popup));
});

formProfile.addEventListener('submit', handleFormSubmitProfile);
formAddPlace.addEventListener('submit', handleFormSubmitAddPlace);

export { handleCardClick, formAddPlace, formProfile };

