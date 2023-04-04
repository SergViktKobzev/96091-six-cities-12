import {RATING_STARS_COUNT} from '../const';

export function adaptRatingForRendering(rating: number): number {
  return Math.round(rating) * 100 / RATING_STARS_COUNT;
}
