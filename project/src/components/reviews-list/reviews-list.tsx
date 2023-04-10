
import {useMemo} from 'react';
import {Reviews} from '../../types/offers';
import {sortReviewsByDate} from '../../utils/utils';
import {MAX_REVIEWS_COUNT} from '../../const';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Reviews;
};

export default function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortedReviews = useMemo(() =>
    [...reviews].sort(sortReviewsByDate).slice(0, MAX_REVIEWS_COUNT),
  [reviews]);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
    </ul>
  );
}
