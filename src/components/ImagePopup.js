function ImagePopup(props) {
  return (
    <div className={`popup popup_card popup_bg-color_image ${props.card ? "popup_is-opened" : ""}`}>
      <div className="popup__container popup__container-image">
        <button className="popup__close-button link" aria-label="Close" type="button" onClick={props.onClose}></button>
        <img className="popup__image" src={props.link} alt={props.name}/>
        <p className="popup__image-name">{props.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;