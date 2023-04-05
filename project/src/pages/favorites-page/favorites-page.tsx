import {Helmet} from 'react-helmet-async';
import {Offers} from '../../types/offers';
import FavoriteOffersContainer from '../../components/favorite-offers-container/favorite-offers-container';
import FavoriteOffersContainerEmpty from '../../components/favorite-offers-container-empty/favorite-offers-container-empty';
import {useMemo} from 'react';

type FavoritesPageProps = {
  offers: Offers;
};

export default function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = useMemo(() => (
    offers.filter((offer) => offer.isFavorite)
  ), [offers]);
  const favoriteOffersCount = favoriteOffers.length;

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
              <FavoriteOffersContainer favoriteOffers={favoriteOffers} /> :
              <FavoriteOffersContainerEmpty />
          }
        </div>
      </main>
    </>
  );
}
