import React from 'react';
import {useEffect, useState} from 'react';
import Api from '../utils/Api.js';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const [userData, setUserData] = useState({userName: '', userDescription: '', userAvatar: ''});
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
          <button className="profile__avatar" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar-image" src={`${userData.userAvatar}`} alt={userData.userName}/>
          </button>  
          <div className="profile__info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userData.userName}</h1>
              <button className="profile__edit-button link" aria-label="Edit" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userData.userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button link" aria-label="Add" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) => (
            <Card key={item._id} card={item} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;