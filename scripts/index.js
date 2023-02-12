const popup = document.querySelector('.popup');
const popupAddPlace = document.querySelector('.popup_function_add-place');
const popupPhoto = document.querySelector('.popup-photo');
const editProfileButton = document.querySelector('.profile__edit-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePopupButton = document.querySelector('.popup__close');
const closePopupAddPlaceButton = document.querySelector('.popup__close_place_add-place');
const closePopupPhotoButton = document.querySelector('.popup__close_place_photo');
const formElement = document.querySelector('.popup__form');
const formAddPlace = document.querySelector('.popup__form_function_add-place');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__name-description');
const nameInput = document.querySelector('.popup__text-input_content_name');
const placeName = document.querySelector('.popup__text-input_content_place-name');
const placeUrl = document.querySelector('.popup__text-input_content_place-url');
const jobInput = document.querySelector('.popup__text-input_content_job');
const placesContainer = document.querySelector('.places__elements');
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

function addPlaceElement(nameValue, linkValue) {
    const placesTemplate = document.querySelector('#places-template').content;
    const placesElement = placesTemplate.querySelector('.places__element').cloneNode(true);

    placesElement.querySelector('.places__photo').src = linkValue;
    placesElement.querySelector('.places__photo').alt = nameValue;
    placesElement.querySelector('.places__name').textContent = nameValue;
    placesContainer.prepend(placesElement);
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function closePopupAddPlace() {
    popupAddPlace.classList.remove('popup_opened');
}

function closePopupPhoto() {
    popupPhoto.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}


const handleFormSubmitAddPlace = (evt) => {
    evt.preventDefault();
    addPlaceElement(placeName.value, placeUrl.value);
    closePopupAddPlace()
}

initialCards.forEach((element) => {
    addPlaceElement(element.name, element.link);
})

editProfileButton.addEventListener('click', () => {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
})

addPlaceButton.addEventListener('click', () => {
    placeName.value = '';
    placeUrl.value = '';
    popupAddPlace.classList.add('popup_opened');
})

closePopupButton.addEventListener('click', () => {
    closePopup();
})

closePopupAddPlaceButton.addEventListener('click', () => {
    closePopupAddPlace();
})

closePopupPhotoButton.addEventListener('click', () => {
    closePopupPhoto();
})

formElement.addEventListener('submit', handleFormSubmit);

formAddPlace.addEventListener('submit', handleFormSubmitAddPlace);

placesContainer.addEventListener('click', (evt) => {
    console.log(evt.target);
    if (evt.target.classList.contains('places__photo')) {
        popupPhoto.classList.add('popup_opened');
        popupPhoto.querySelector('.popup-photo__capture').src = evt.target.src;
        popupPhoto.querySelector('.popup-photo__capture-name').textContent = evt.target.alt;
    }

    if (evt.target.classList.contains('places__like')) {
        evt.target.classList.toggle('places__like_active');
    }

    if (evt.target.classList.contains('places__delete')) {
        evt.target.closest('.places__element').remove();
    }
})

