import React from 'react';
import { useEffect, useState } from 'react';
import Api from '../utils/Api.js';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDeleteClick}) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    Api.getCardsData()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-wrapper">
          <button className="profile__avatar" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar-image" src={`${currentUser.userAvatar}`} alt={currentUser.userName}/>
          </button>  
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{currentUser.userName}</h1>
              <button className="profile__edit-button link" aria-label="Edit" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button link" aria-label="Add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={onCardClick} onCardDeleteClick={onCardDeleteClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;