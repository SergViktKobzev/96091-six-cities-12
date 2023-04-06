import React, {useState} from 'react';
import {RATING_TITLES} from '../../const';

export default function ReviewsForm(): JSX.Element {

  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map(({ rating, title }) => (
          <React.Fragment key={rating}>
            <input
              onChange={(evt) => {
                setNewReview({...newReview, rating: Number(evt.target.value)});
              }}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rating}
              id={`${rating}-stars`}
              type="radio"
              checked={newReview.rating === rating}
            />
            <label
              htmlFor={`${rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={(evt) => {
          setNewReview({...newReview, comment: evt.target.value});
        }}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={newReview.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
