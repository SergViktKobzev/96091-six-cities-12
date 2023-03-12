import OfferCard from '../offerCard/offer-card';

export default function OfferCardCity(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place" />
        </a>
      </div>
      <OfferCard />
    </article>
  );
}
