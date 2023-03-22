import { page } from "../scripts/constants.js";

//  Закрытие формы/картинки нажатием клавиши [Esc]
function closePopupByEsc() {
  if (event.code === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
}

//  Закрытие формы/картинки нажатием вне области формы/картинки
function closePopupByOutsideClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.currentTarget);
  }
}

//  Установка слушателя нажатия вне области попапа
function setOutsideClickListener(popup) {
  popup.addEventListener('click', closePopupByOutsideClick);
}

//  Удаление слушателя нажатия вне области попапа
function removeOutsideClickListener(popup) {
  popup.removeEventListener('click', closePopupByOutsideClick);
}

//  Открытие попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  //  Слушатель события клика вне формы и закрытие попапа
  setOutsideClickListener(popup);
  //  При нажатии Esc закрыть попап
  page.addEventListener('keydown', closePopupByEsc);
}

//  Закрытие попапов
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  //  Удаление слушателя нажатия Esc для закрытия попап
  page.removeEventListener('keydown', closePopupByEsc);
  removeOutsideClickListener(popup);
}

export { openPopup, closePopup };