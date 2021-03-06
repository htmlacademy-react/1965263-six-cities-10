export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_COEFFICIENT = 20;

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const listClassNameMap = {
  main: 'cities__places-list places__list tabs__content',
  room: 'near-places__list places__list',
};

export const placeCardClassNameMap = {
  main: 'cities__card place-card',
  room: 'near-places__card place-card',
};

export const imageWrapperClassNameMap = {
  main: 'cities__image-wrapper place-card__image-wrapper',
  room: 'near-places__image-wrapper place-card__image-wrapper',
};

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
