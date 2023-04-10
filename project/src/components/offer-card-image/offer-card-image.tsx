import {Link, generatePath} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {useMemo} from 'react';
import {OfferCardVariant, OfferCardImageClassName, AppRoute, OfferCardImageSize} from '../../const';

type OfferCardImageProps = {
  offer: Offer;
  variant: OfferCardVariant;
};

export default function OfferCardImage({offer, variant}: OfferCardImageProps): JSX.Element {
  const {previewImage, title, id} = offer;

  const className = useMemo(() => {
    if (variant === OfferCardVariant.Cities) {
      return OfferCardImageClassName.Cities;
    }
    if (variant === OfferCardVariant.Near) {
      return OfferCardImageClassName.Near;
    }
    if (variant === OfferCardVariant.Favorites) {
      return OfferCardImageClassName.Favorites;
    }
  }, [variant]);

  const imgSize = useMemo(() => {
    if (variant === OfferCardVariant.Favorites) {
      return OfferCardImageSize.Favorites;
    }
    return OfferCardImageSize.Default;
  }, [variant]);

  return (
    <div className={className}>
      <Link to={generatePath(AppRoute.Room, {id: id.toString()})}>
        <img className="place-card__image" src={previewImage} width={imgSize.width} height={imgSize.height} alt={title} />
      </Link>
    </div>
  );
}
