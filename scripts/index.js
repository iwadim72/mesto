let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__name-description');
let nameInput = document.querySelector('.popup__text-input_content_name');
let jobInput = document.querySelector('.popup__text-input_content_job');

function ClosePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userJob.textContent = `${jobInput.value}`;
    ClosePopup();
}

editProfileButton.addEventListener('click', function () {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
});

closePopupButton.addEventListener('click', function () {
    ClosePopup();
});

formElement.addEventListener('submit', handleFormSubmit); 
