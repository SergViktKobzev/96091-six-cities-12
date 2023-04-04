import FavoriteOffersList from '../../components/favorite-offers-list/favorite-offers-list';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Offers} from '../../types/offers';

type FavoritesPageProps = {
  offers: Offers;
};

export default function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers: Offers = offers.filter((offer) => offer.isFavorite);
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));
  return (
    <>
      <Helmet>
        <title>6 cities favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="/">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <FavoriteOffersList favoriteOffers={favoriteOffers} city={city} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </>
  );
}
