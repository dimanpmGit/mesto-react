import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { useState } from 'react';

let name = '';
let title = '';

export default function App() {

  // Хук открытия попапа аватарки
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  // Хук открытия профиля для редактирования
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  // Хук открытия попапа для добавления карточки
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  // Хук открытия полноразмерной картинки
  const [selectedCard, setSelectedCard] = useState({});
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    name = 'avatar';
    title = 'Обновить аватар';
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    name = 'edit';
    title = 'Редактировать профиль';
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    name = 'add';
    title = 'Новое место';
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
        <Footer />
        <PopupWithForm name={name} title={title} buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input id="avatar-url" className="popup__input popup__input_type_avatar" name="avatar" type="url"
            placeholder="Ссылка на аватар" required/>
          <span className="popup__error avatar-url-error"></span>
        </PopupWithForm>
        <PopupWithForm name={name} title={title} buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input id="name-input" className="popup__input popup__input_type_top" name="popup-name" type="text"
            placeholder="Имя" required minLength="2" maxLength="40"/>
          <span className="popup__error name-input-error"></span>
          <input id="description-input" className="popup__input popup__input_type_bottom" name="popup-description" type="text"
            placeholder="Описание" required minLength="2" maxLength="200"/>
          <span className="popup__error description-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name={name} title={title} buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id="place-name" className="popup__input popup__input_type_top" name="name" type="text"
            placeholder="Название" required minLength="2" maxLength="30"/>
          <span className="popup__error place-name-error"></span>
          <input id="url" className="popup__input popup__input_type_bottom" name="link" type="url"
            placeholder="Ссылка на страницу" required/>
          <span className="popup__error url-error"></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
};