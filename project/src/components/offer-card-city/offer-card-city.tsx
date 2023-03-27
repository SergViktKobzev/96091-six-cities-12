import OfferCard from '../offer-card/offer-card';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';

type OfferProps = {
  offer: Offer;
};

export default function OfferCardCity({offer}: OfferProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      <OfferCard offer={offer} />
    </article>
  );
}
