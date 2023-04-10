export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*',
}

export enum LayoutClassName {
  Main = 'page page--gray page--main',
  Login = 'page page--gray page--login',
  FavoritesEmpty = 'page page--favorites-empty',
  Default = 'page',
}

export enum OfferCardListClassName {
  Cities = 'cities__places-list places__list tabs__content',
  Near = 'near-places__list places__list',
  Favorites = 'favorites__places',
}

export enum OfferCardClassName {
  Cities = 'cities__card place-card',
  Near = 'near-places__card place-card',
  Favorites = 'favorites__card place-card',
}

export enum OfferCardImageClassName {
  Cities = 'cities__image-wrapper place-card__image-wrapper',
  Near = 'near-places__image-wrapper place-card__image-wrapper',
  Favorites = 'favorites__image-wrapper place-card__image-wrapper',
}

export enum MapClassName {
  Cities = 'cities__map map',
  Room = 'property__map map',
}

export enum OfferCardVariant {
  Cities = 'Cities',
  Near = 'Near',
  Favorites = 'Favorites',
}

export const OfferCardImageSize = {
  Favorites: {
    width: '150',
    height: '110'
  },
  Default: {
    width: '260',
    height: '200'
  }
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_STARS_COUNT = 5;

export const RATING_TITLES = [
  { rating: 5, title: 'perfect' },
  { rating: 4, title: 'good' },
  { rating: 3, title: 'not bad' },
  { rating: 2, title: 'badly' },
  { rating: 1, title: 'terribly' },
] as const;

export const MAX_NUMBER_OFFER_IMAGE = 6;

export const MAX_REVIEWS_COUNT = 10;
