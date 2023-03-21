function ImagePopup() {
  return (
    <div className="popup popup_card popup_bg-color_image">
      <div className="popup__container popup__container-image">
        <button className="popup__close-button link" aria-label="Close" type="button"></button>
        <img className="popup__image"/>
        <p className="popup__image-name"></p>
      </div>
    </div>
  );
}

export default ImagePopup;