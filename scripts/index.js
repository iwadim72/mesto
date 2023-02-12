const profilePopup = document.querySelector('.profile-popup');
const popupAddPlace = document.querySelector('.popup_function_add-place');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoCapture = popupPhoto.querySelector('.popup-photo__capture');
const popupPhotoName = popupPhoto.querySelector('.popup-photo__capture-name');
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const formElement = profilePopup.querySelector('.popup__form');
const formAddPlace = document.querySelector('.popup__form_function_add-place');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__name-description');
const nameInput = document.querySelector('.popup__text-input_content_name');
const placeName = document.querySelector('.popup__text-input_content_place-name');
const placeUrl = document.querySelector('.popup__text-input_content_place-url');
const jobInput = document.querySelector('.popup__text-input_content_job');
const placesContainer = document.querySelector('.places__elements');
const placesTemplate = document.querySelector('#places-template').content;
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function createCard(item) {
    const cardElement = placesTemplate.querySelector('.places__element').cloneNode(true);
    cardElement.querySelector('.places__photo').src = item.link;
    cardElement.querySelector('.places__photo').alt = item.name;
    cardElement.querySelector('.places__name').textContent = item.name;
    return cardElement
}

function addPlaceElement(cardElement) {
    placesContainer.prepend(cardElement);
}


function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}


function scalingPhoto(evt) {
    openPopup(popupPhoto);
    popupPhotoCapture.src = evt.target.src;
    popupPhotoCapture.alt = evt.target.alt;
    popupPhotoName.textContent = evt.target.alt;
}

const handleFormSubmitAddPlace = (evt) => {
    evt.preventDefault();
    const inputValue = {
        name: placeName.value,
        link: placeUrl.value
    }
    addPlaceElement(createCard(inputValue));
    closePopupAddPlace()
}

initialCards.forEach((element) => {
    addPlaceElement(createCard(element));
})

editProfileButton.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    openPopup(profilePopup);
})

addPlaceButton.addEventListener('click', () => {
    formAddPlace.reset();
    openPopup(popupAddPlace);
})

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

formElement.addEventListener('submit', handleFormSubmit);

formAddPlace.addEventListener('submit', handleFormSubmitAddPlace);

placesContainer.addEventListener('click', (evt) => {
    console.log(evt.target);
    if (evt.target.classList.contains('places__photo')) {
        scalingPhoto(evt);
    }

    if (evt.target.classList.contains('places__like')) {
        evt.target.classList.toggle('places__like_active');
    }

    if (evt.target.classList.contains('places__delete')) {
        evt.target.closest('.places__element').remove();
    }
})

