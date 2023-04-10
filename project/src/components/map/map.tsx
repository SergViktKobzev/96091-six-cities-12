import { useEffect, useMemo, useRef } from 'react';
import { MapClassName, OfferCardVariant } from '../../const';
import { City, Offers } from '../../types/offers';
import useMap from '../../hooks/useMap';
import { Marker, Icon, } from 'leaflet';

type MapProps = {
  city: City;
  offers: Offers;
  variant: OfferCardVariant;
  activeOfferCard?: number;
}

const defaultIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 60],
  iconAnchor: [20, 60]
});

const activeIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [40, 60],
  iconAnchor: [20, 60]
});

export default function Map({city, offers, variant, activeOfferCard}: MapProps): JSX.Element {
  const className = useMemo(() => {
    if (variant === OfferCardVariant.Cities) {
      return MapClassName.Cities;
    }
    if (variant === OfferCardVariant.Near) {
      return MapClassName.Room;
    }
  }, [variant]);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude
        });

        marker.setIcon(
          activeOfferCard !== undefined && offer.id === activeOfferCard
            ? activeIcon
            : defaultIcon
        ).addTo(map);
      });
    }
  }, [map, offers, activeOfferCard]);

  return(
    <section className={className} ref={mapRef}></section>
  );
}
