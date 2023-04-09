type MapProps = {
  activeOfferCard?: number;
}

export default function Map({activeOfferCard}: MapProps): JSX.Element {
  return(
    <section className="cities__map map">
      {activeOfferCard}
    </section>
  );
}
