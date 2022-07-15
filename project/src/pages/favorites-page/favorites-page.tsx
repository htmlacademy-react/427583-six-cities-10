import { PlaceCardType } from '../../types/types';
import FavoritesPlaceCard from '../../components/favorites-place-card/favorites-place-card';
import HeaderMain from '../../components/header-main/header-main';

type FavoritesPageProps = {
  placeCards: PlaceCardType[],
};

export default function FavoritesPage({placeCards}: FavoritesPageProps): JSX.Element {
  function renderEmptyMain(): JSX.Element {
    return (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
    );
  }

  function renderFavoritesMain(): JSX.Element {
    return (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {placeCards.slice(0, 2).map((placeCard) => <FavoritesPlaceCard placeCard={placeCard} key={placeCard.id} />)}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {placeCards.slice(2, 3).map((placeCard) => <FavoritesPlaceCard placeCard={placeCard} key={placeCard.id} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }

  return (
    <div className={`page-header ${placeCards.length === 0 ? 'page--favorites-empty' : ''}`}>
      <HeaderMain isLoggedIn />

      {placeCards.length > 0 ? renderFavoritesMain() : renderEmptyMain()}

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
