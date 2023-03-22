import React from '../../node_modules/react/index.js';
import Api from '../utils/Api.js';

function Main(props) {
  const [userData, setArray] = React.useState({ userName: '', userDescription: '', userAvatar: '' });

  React.useEffect(() => {
      Api.getUserInfo()
      .then((data) => {
        setArray({
          userName : data.name,
          userDescription : data.about,
          userAvatar : data.avatar,
        });
      }
      )
      .catch((err) => {
        console.log(err);
      })
    }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-wrapper">
          <button className="profile__avatar" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar-image" style={{backgroundImage: `url(${userData.userAvatar})`}}/>
          </button>  
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userData.userName}</h1>
              <button className="profile__edit-button link" aria-label="Edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{userData.userDescription}</p>
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