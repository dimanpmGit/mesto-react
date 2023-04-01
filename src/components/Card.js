import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({card, onCardClick, onCardDeleteClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card);
  }

  return (
    <li className="element">
      <img className="element__image" src={`${card.link}`} alt={`${card.name}`} onClick={handleClick}/>
      {isOwn && <button className='element__trash-button' aria-label="Trash" type="button" onClick={handleDeleteClick} />}
      <div className="element__info">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__heart-block">
          <button className="element__heart-button" aria-label="Like" type="button"></button>
          <p className="element__heart-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};