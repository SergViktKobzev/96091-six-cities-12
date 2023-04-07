import OfferCardCity from '../offer-card-city/offer-card-city';
import {Offers, Offer} from '../../types/offers';

type OffersProps = {
  offers: Offers;
  onMouseOver: (activeOfferCard: number) => void;
};

export default function OfferCardCityList({offers, onMouseOver}: OffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => <OfferCardCity key={offer.id} offer={offer} onMouseOver={onMouseOver}/>)}
    </div>
  );
}
