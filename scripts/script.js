const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit");

const togglePopupVisibitity = function () {
  popupElement.classList.toggle("popup_opened");
};

togglePopupVisibitity();

const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};

const closePopupByClickOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  closePopup();
};

popupOpenButtonElement.addEventListener("click", togglePopupVisibitity);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOverlay);

const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__name");
const jobInput = formElement.querySelector(".popup__caption");

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("popup__name");
  nameInput.textContent = input.value;

  const jobInput = document.querySelector("popup__caption");
  jobInput.textContent = input.value;

}

formElement.addEventListener("submit", handleFormSubmit);
