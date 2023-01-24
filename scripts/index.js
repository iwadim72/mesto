let popup = document.querySelector('.popup');
let popupEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__name-description');
let nameInput = document.querySelector('.popup__firstname');
let jobInput = document.querySelector('.popup__name-description');


popupEditButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

popupCloseButton.addEventListener('click', function () {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.remove('popup_opened');
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userJob.textContent = `${jobInput.value}`;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 
