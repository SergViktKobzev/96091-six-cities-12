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
];

export const MAX_NUMBER_OFFER_IMAGE = 6;
