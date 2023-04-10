import OfferCard from '../offer-card/offer-card';
import {Offers, Offer} from '../../types/offers';
import {OfferCardVariant, OfferCardListClassName} from '../../const';
import {useMemo} from 'react';

type OffersProps = {
  offers: Offers;
  variant: OfferCardVariant;
  onMouseOver?: (activeOfferCard: number) => void;
};

export default function OfferCardList({offers, variant, onMouseOver}: OffersProps): JSX.Element {
  const className = useMemo(() => {
    if (variant === OfferCardVariant.Cities) {
      return OfferCardListClassName.Cities;
    }
    if (variant === OfferCardVariant.Near) {
      return OfferCardListClassName.Near;
    }
    if (variant === OfferCardVariant.Favorites) {
      return OfferCardListClassName.Favorites;
    }
  }, [variant]);

  return (
    <div className={className}>
      {offers.map(
        (offer: Offer) => (
          <OfferCard key={offer.id} offer={offer} variant={variant} onMouseOver={onMouseOver} />)
      )}
    </div>
  );
}
