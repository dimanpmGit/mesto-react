import React from '../../node_modules/react/index.js';
import Api from '../utils/Api.js';
import Card from './Card';

function Main(props) {
  const [userData, setUserData] = React.useState({userName: '', userDescription: '', userAvatar: ''});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([Api.getUserInfo(), Api.getCardsData()])
      .then((data) => {
        setUserData({
          userName: data[0].name,
          userDescription: data[0].about,
          userAvatar: data[0].avatar
        });

        setCards(data[1]);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-wrapper">
          <button className="profile__avatar" type="button" onClick={props.onEditAvatar}>
            <img className="profile__avatar-image" style={{backgroundImage: `url(${userData.userAvatar})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}/>
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
        <ul className="elements__list">
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;