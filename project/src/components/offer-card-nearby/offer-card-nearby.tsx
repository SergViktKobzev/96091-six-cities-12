import OfferCard from '../offer-card/offer-card';

export default function OfferCardNearby(): JSX.Element {
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place" />
        </a>
      </div>
      <OfferCard />
    </article>
  );
}
