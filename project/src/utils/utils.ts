import dayjs from 'dayjs';
import {RATING_STARS_COUNT} from '../const';
import {Review} from '../types/offers';

export function adaptRatingForRendering(rating: number): number {
  return Math.round(rating) * 100 / RATING_STARS_COUNT;
}

export function sortReviewsByDate(review1: Review, review2: Review) {
  const dateA = review1.date;
  const dateB = review2.date;

  return dayjs(dateB).diff(dateA);
}
