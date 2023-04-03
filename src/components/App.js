import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

let name = '';
let title = '';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsData()])
    .then((data) => {
      setCurrentUser({
        _id: data[0]._id,
        userName: data[0].name,
        userDescription: data[0].about,
        userAvatar: data[0].avatar
      });
      setCards(data[1]);
    })
    .catch((err) => {
      console.log(err);
    });
    
    /*
    api.getUserInfo()
      .then((data) => {
        setCurrentUser({
          userName: data.name,
          userDescription: data.about,
          userAvatar: data.avatar
        });
      })
      .catch((err) => {
        console.log(err);
      })
        api.getCardsData()
          .then((data) => {
            setCards(data);
          })
          .catch((err) => {
            console.log(err);
          })*/
  }, []);
  console.log(currentUser);
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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
      api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) => {
            state.map((c) => c._id === card._id ? newCard : c)
          });

      });
  }

  function handleDeleteClick() {
    console.log('handleDeleteClick clicked');
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main cards={cards}
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteClick}
          />
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
    </CurrentUserContext.Provider>
  );
};