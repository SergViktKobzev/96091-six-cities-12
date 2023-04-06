import {Link} from 'react-router-dom';
import {Offers} from '../../types/offers';
import OfferCardContainer from '../../components/offer-card-container/offer-card-container';
import OfferCardContainerEmpty from '../../components/offer-card-container-empty/offer-card-container-empty';

type OfferProps = {
  offers: Offers;
};

export default function MainPage({offers}: OfferProps): JSX.Element {
  const className = offers.length ?
    'page__main page__main--index' :
    'page__main page__main--index page__main--index-empty';

  return (
    <main className={className}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        {
          offers.length ?
            <OfferCardContainer offers={offers} /> :
            <OfferCardContainerEmpty />
        }
      </div>
    </main>
  );
}
