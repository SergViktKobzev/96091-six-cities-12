
import dayjs from 'dayjs';
import {Review} from '../../types/offers';
import {adaptRatingForRendering} from '../../utils/utils';

type ReviewProps = {
  review: Review;
};

export default function ReviewsItem({review}: ReviewProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const {name, avatarUrl} = user;


  const HUMAN_DATE_FORMAT = 'MMMM YYYY';
  const ROBOT_DATE_FORMAT = 'YYYY-MM-DD';
  const formatHumanDate = dayjs(date).format(HUMAN_DATE_FORMAT);
  const formatRobotDate = dayjs(date).format(ROBOT_DATE_FORMAT);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${adaptRatingForRendering(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={formatRobotDate}>{formatHumanDate}</time>
      </div>
    </li>
  );
}
