const popup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__name-description');
const nameInput = document.querySelector('.popup__text-input_content_name');
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

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup();
}

initialCards.forEach((element) => {
    addPlaceElement(element.name, element.link);
})

editProfileButton.addEventListener('click', function () {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
});

closePopupButton.addEventListener('click', function () {
    closePopup();
});

formElement.addEventListener('submit', handleFormSubmit);

