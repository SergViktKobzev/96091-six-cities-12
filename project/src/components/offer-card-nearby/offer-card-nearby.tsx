import OfferCard from '../offer-card/offer-card';
import {Link} from 'react-router-dom';

export default function OfferCardNearby(): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      <OfferCard />
    </article>
  );
}
