import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Offers} from '../../types/offers';
import FavoriteOffersContainer from '../../components/favorite-offers-container/favorite-offers-container';
import FavoriteOffersContainerEmpty from '../../components/favorite-offers-container-empty/favorite-offers-container-empty';

type FavoritesPageProps = {
  offers: Offers;
};

export default function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers: Offers = offers.filter((offer) => offer.isFavorite);
  const favoriteOffersCount = favoriteOffers.length;
  const cities = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  const className = favoriteOffersCount ?
    'page__main page__main--favorites' :
    'page__main page__main--favorites page__main--favorites-empty';
  return (
    <>
      <Helmet>
        <title>6 cities favorites</title>
      </Helmet>
      <main className={className}>
        <div className="page__favorites-container container">
          {
            favoriteOffersCount ?
              <FavoriteOffersContainer favoriteOffers={favoriteOffers} cities={cities} /> :
              <FavoriteOffersContainerEmpty />
          }
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
