import avatarImg from '../images/Avatar.png';
import App from './App';
import PopupWithForm from './PopupWithForm';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-wrapper">
          <button className="profile__avatar" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar-image" src={avatarImg}/>
          </button>  
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button link" aria-label="Edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button link" aria-label="Add" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;