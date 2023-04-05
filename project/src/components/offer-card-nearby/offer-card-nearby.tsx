import OfferCard from '../offer-card/offer-card';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';

type OfferProps = {
  offer: Offer;
};

export default function OfferCardNearby({offer}: OfferProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        null}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      <OfferCard offer={offer} />
    </article>
  );
}
