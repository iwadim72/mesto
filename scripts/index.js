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

function createCard(item) {
    const cardElement = placesTemplate.querySelector('.places__element').cloneNode(true);
    const cardPhoto = cardElement.querySelector('.places__photo');
    const cardLike = cardElement.querySelector('.places__like');
    const buttonDeleteCard = cardElement.querySelector('.places__delete')
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;
    cardElement.querySelector('.places__name').textContent = item.name;
    cardPhoto.addEventListener('click', scalingPhoto);
    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('places__like_active');
    })
    buttonDeleteCard.addEventListener('click', () => {
        cardElement.remove();
    })
    return cardElement
}

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

function scalingPhoto(evt) {
    popupPhotoCapture.src = evt.target.src;
    popupPhotoCapture.alt = evt.target.alt;
    popupPhotoName.textContent = evt.target.alt;
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

buttonOpenPopupProfile.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    const buttonSubmit = popup.querySelector(settingsValidation.submitButtonSelector);
    disableButtonSubmit(buttonSubmit);
    resetValidationError(popup);
    openPopup(profilePopup);
})

buttonOpenPopupAddPlace.addEventListener('click', () => {
    formAddPlace.reset();
    const buttonSubmit = popup.querySelector(settingsValidation.submitButtonSelector);
    disableButtonSubmit(buttonSubmit);
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


