const profilePopup = document.querySelector('.profile-popup');
const popupAddPlace = document.querySelector('.popup_function_add-place');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCapture = popupPhoto.querySelector('.popup-photo__capture');
const popupPhotoName = popupPhoto.querySelector('.popup-photo__capture-name');
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupAddPlace = document.querySelector('.profile__add-button');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const formProfile = profilePopup.querySelector('.popup__form');
const formAddPlace = document.querySelector('.popup__form_function_add-place');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__name-description');
const nameInput = document.querySelector('.popup__text-input_content_name');
const placeName = document.querySelector('.popup__text-input_content_place-name');
const placeUrl = document.querySelector('.popup__text-input_content_place-url');
const jobInput = document.querySelector('.popup__text-input_content_job');
const placesContainer = document.querySelector('.places__elements');
const placesTemplate = document.querySelector('#places-template').content;


function addPlaceElement(cardElement) {
    placesContainer.prepend(cardElement);
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

export function scalingPhoto(evt) {
    popupPhotoCapture.src = evt.target.src;
    popupPhotoCapture.alt = evt.target.alt;
    popupPhotoName.textContent = evt.target.alt;
    openPopup(popupPhoto);
}

import { Card } from "./Card.js";

const handleFormSubmitAddPlace = (evt) => {
    evt.preventDefault();
    const inputValue = {
        name: placeName.value,
        link: placeUrl.value
    }
    addPlaceElement(new Card(inputValue, '#places-template').generateCard());
    closePopup(popupAddPlace);
}


initialCards.forEach((element) => {
    addPlaceElement(new Card(element, '#places-template').generateCard());
})

buttonOpenPopupProfile.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    const buttonSubmit = profilePopup.querySelector(settingsValidation.submitButtonSelector);
    disableButtonSubmit(buttonSubmit);
    resetValidationError(profilePopup);
    openPopup(profilePopup);
})

buttonOpenPopupAddPlace.addEventListener('click', () => {
    formAddPlace.reset();
    const buttonSubmit = popupAddPlace.querySelector(settingsValidation.submitButtonSelector);
    disableButtonSubmit(buttonSubmit);
    resetValidationError(popupAddPlace);
    openPopup(popupAddPlace);
})

buttonsClosePopup.forEach((button) => {
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

