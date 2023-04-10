import {Offers} from '../../types/offers';
import OfferCardList from '../offer-card-list/offer-card-list';
import Map from '../map/map';
import {useState} from 'react';
import {OfferCardVariant} from '../../const';

type OfferCardContainerProps = {
  offers: Offers;
};

export default function OfferCardContainer({offers}: OfferCardContainerProps): JSX.Element {
  const [activeOfferCard, setActiveOfferCard] = useState<number>(0);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by </span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <OfferCardList offers={offers} variant={OfferCardVariant.Cities} onMouseOver={setActiveOfferCard} />
      </section>
      <div className="cities__right-section">
        <Map
          city={offers[0].city}
          offers={offers}
          variant={OfferCardVariant.Cities}
          activeOfferCard={activeOfferCard}
        />
      </div>
    </div>
  );
}

