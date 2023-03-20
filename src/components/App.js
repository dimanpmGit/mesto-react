import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <template id="card-item-template">
          <li className="element">
            <img className="element__image"/>
            <button className="element__trash-button" aria-label="Trash" type="button"></button>
            <div className="element__info">
              <h2 className="element__name"></h2>
              <div className="element__heart-block">
                <button className="element__heart-button" aria-label="Like" type="button"></button>
                <p className="element__heart-likes">0</p>
              </div>
            </div>
          </li>
        </template>
      </div>
    </body>
  );
}

export default App;