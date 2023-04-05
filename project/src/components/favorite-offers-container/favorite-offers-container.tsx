import {Link} from 'react-router-dom';
import {Offers} from '../../types/offers';
import FavoriteOffersList from '../favorite-offers-list/favorite-offers-list';


type FavoriteOffersContainerProps = {
  favoriteOffers: Offers;
  cities: string[];
};

export default function FavoriteOffersContainer({favoriteOffers, cities}: FavoriteOffersContainerProps): JSX.Element {
  return (
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
  );
}
