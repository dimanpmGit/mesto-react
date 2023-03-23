export default function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }  
  return (
    <li className="element">
      <img className="element__image" src={`${card.link}`} alt={`${card.name}`} onClick={handleClick}/>
      <button className="element__trash-button" aria-label="Trash" type="button"></button>
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