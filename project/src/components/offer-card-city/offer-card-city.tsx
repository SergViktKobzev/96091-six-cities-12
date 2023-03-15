import OfferCard from '../offer-card/offer-card';
import {Link} from 'react-router-dom';

export default function OfferCardCity(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/">
          <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place" />
        </Link>
      </div>
      <OfferCard />
    </article>
  );
}
