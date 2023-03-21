import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React from '../../node_modules/react/index.js';
let children = '';
let name = '';
let title = '';

function App(props) {

  // Хук открытия попапа аватарки
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);

  // Хук открытия профиля для редактирования
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);

  // Хук открытия попапа для добавления карточки
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  

  function handleEditAvatarClick() {
    setEditAvatar(true);
    setEditProfile(false);
    setAddPlace(false);
    name = 'avatar';
    title = 'Обновить аватар';
    children = `<input id="avatar-url" class="popup__input popup__input_type_avatar" name="avatar" type="url"
      placeholder="Ссылка на аватар" required>
      <span class="popup__error avatar-url-error"></span>`;
  }
  
  function handleEditProfileClick() {
    setEditAvatar(false);
    setEditProfile(true);
    setAddPlace(false);
    name = 'edit';
    title = 'Редактировать профиль';
    children = `<input id="name-input" class="popup__input popup__input_type_top" name="popup-name" type="text" placeholder="Имя" required minlength="2" maxlength="40">
      <span class="popup__error name-input-error"></span>
      <input id="description-input" class="popup__input popup__input_type_bottom" name="popup-description" type="text"
      placeholder="Описание" required minlength="2" maxlength="200">
      <span class="popup__error description-input-error"></span>`;
  }
  
  function handleAddPlaceClick() {
    setEditAvatar(false);
    setEditProfile(false);
    setAddPlace(true);
    name = 'add';
    title = 'Новое место';
    children = `<input id="place-name" class="popup__input popup__input_type_top" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30">
      <span class="popup__error place-name-error"></span>
      <input id="url" class="popup__input popup__input_type_bottom" name="link" type="url"
      placeholder="Ссылка на страницу" required>
      <span class="popup__error url-error"></span>`;
  }

  function closeAllPopups() {
    setEditAvatar(false);
    setEditProfile(false);
    setAddPlace(false);
  }

  return (
    <body className="page">
      <div className="page__container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
        <Footer />
        <PopupWithForm name={name} title={title} isOpen={
          isEditAvatarPopupOpen ? true : 
            isEditProfilePopupOpen ? true : 
                isAddPlacePopupOpen ? true : 
                    false} 
          children={children}
          onClose={closeAllPopups}
        />
        <template id="card-item-template">
          <li className="element">
            <img className="element__image"/>
            <button className="element__trash-button" aria-label="Trash" type="button"></button>
            <div className="element__info">
              <h2 className="element__name"></h2>
              <div className="element__heart-block">
                <button className="element__heart-button" aria-label="Like" type="button"></button>
                <p className="element__heart-likes">0</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </body>
  );
}

export default App;