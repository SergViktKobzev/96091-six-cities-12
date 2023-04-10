import OfferCardInfo from '../offer-card-info/offer-card-info';
import {Offer} from '../../types/offers';
import {useMemo} from 'react';
import {OfferCardClassName, OfferCardVariant} from '../../const';
import PremiumMark from '../premium-mark/premium-mark';
import OfferCardImage from '../offer-card-image/offer-card-image';

type OfferProps = {
  offer: Offer;
  variant: OfferCardVariant;
  onMouseOver?: (activeOfferCard: number) => void;
};

export default function OfferCard({offer, variant, onMouseOver}: OfferProps): JSX.Element {
  const handleMouseOver = (): void => {
    onMouseOver && onMouseOver(offer.id);
  };

  const className = useMemo(() => {
    if (variant === OfferCardVariant.Cities) {
      return OfferCardClassName.Cities;
    }
    if (variant === OfferCardVariant.Near) {
      return OfferCardClassName.Near;
    }
    if (variant === OfferCardVariant.Favorites) {
      return OfferCardClassName.Favorites;
    }
  }, [variant]);

  return (
    <article onMouseOver={onMouseOver && handleMouseOver} className={className}>
      {offer.isPremium && <PremiumMark />}
      <OfferCardImage offer={offer} variant={variant} />
      <OfferCardInfo offer={offer} />
    </article>
  );
}
