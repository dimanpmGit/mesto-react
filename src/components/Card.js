export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="element">
      <img className="element__image" style={{backgroundImage: `url(${props.card.link})`}} onClick={handleClick}/>
      <button className="element__trash-button" aria-label="Trash" type="button"></button>
      <div className="element__info">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__heart-block">
          <button className="element__heart-button" aria-label="Like" type="button"></button>
          <p className="element__heart-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}