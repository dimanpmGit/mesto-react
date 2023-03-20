import avatarImg from '../images/Avatar.png';

function handleEditAvatarClick() {
  const avatarEditButton = document.querySelector('.profile__avatar');
  const popupAvatar = document.querySelector('.popup_avatar');
  avatarEditButton.addEventListener('click', () => {
    popupAvatar.classList.add('popup_is-opened');
  });
}

function handleEditProfileClick() {
  const profileEditButton = document.querySelector('.profile__edit-button');
  const popupProfileEdit = document.querySelector('.popup_edit');
  profileEditButton.addEventListener('click', () => {
    popupProfileEdit.classList.add('popup_is-opened');
  });
}

function handleAddPlaceClick() {
  const cardAddButton = document.querySelector('.profile__add-button');
  const popupCardAdd = document.querySelector('.popup_add');
  cardAddButton.addEventListener('click', () => {
    popupCardAdd.classList.add('popup_is-opened');
  });
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-wrapper">
          <button className="profile__avatar" type="button" onClick={handleEditAvatarClick}>
            <img className="profile__avatar-image" src={avatarImg}/>
          </button>  
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button link" aria-label="Edit" type="button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button link" aria-label="Add" type="button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
      <div className="popup popup_edit">
          <div className="popup__container">
            <button className="popup__close-button link" aria-label="Close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="popup-form-edit" novalidate>
              <input id="name-input" className="popup__input popup__input_type_top" name="popup-name" type="text" placeholder="Имя" required minlength="2" maxlength="40"/>
              <span className="popup__error name-input-error"></span>
              <input id="description-input" className="popup__input popup__input_type_bottom" name="popup-description" type="text"
                placeholder="Описание" required minlength="2" maxlength="200"/>
              <span className="popup__error description-input-error"></span>
              <button className="popup__save-button" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_add">
          <div className="popup__container">
            <button className="popup__close-button link" aria-label="Close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="popup-form-add" novalidate>
              <input id="place-name" className="popup__input popup__input_type_top" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30"/>
              <span className="popup__error place-name-error"></span>
              <input id="url" className="popup__input popup__input_type_bottom" name="link" type="url"
                placeholder="Ссылка на страницу" required/>
                <span className="popup__error url-error"></span>
              <button className="popup__save-button" type="submit">Создать</button>
            </form>
          </div>
        </div>
        <div className="popup popup_card popup_bg-color_image">
          <div className="popup__container popup__container-image">
            <button className="popup__close-button link" aria-label="Close" type="button"></button>
            <img className="popup__image"/>
            <p className="popup__image-name"></p>
          </div>
        </div>
        <div className="popup popup_delete">
          <div className="popup__container">
            <button className="popup__close-button link" aria-label="Close" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="popup-form-delete" novalidate>
              <button className="popup__save-button popup__save-button_type_delete" type="submit">Да</button>
            </form>
          </div>
        </div>
        <div className="popup popup_avatar">
          <div className="popup__container">
            <button className="popup__close-button link" aria-label="Close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="popup-form-avatar" novalidate>
              <input id="avatar-url" className="popup__input popup__input_type_avatar" name="avatar" type="url"
                placeholder="Ссылка на аватар" required/>
                <span className="popup__error avatar-url-error"></span>
              <button className="popup__save-button popup__save-button_type_avatar" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
    </main>
  );
}

export default Main;