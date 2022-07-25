import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/types';

const RatingWidth = {
  0: 0,
  1: 20,
  2: 40,
  3: 60,
  4: 80,
  5: 100
};

type OfferCardProps = {
  offer: Offer,
  className?: string,
}

export default function OfferCard({ offer, className }: OfferCardProps): JSX.Element {
  const isInBookmarks = Boolean(Math.round(Math.random()));
  const bookmarkClasses = [
    'place-card__bookmark-button',
    isInBookmarks ? 'place-card__bookmark-button--active' : '',
    'button',
  ].join(' ');

  return (
    <div className={`${className} place-card__info`}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClasses} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ 'width': `${RatingWidth[offer.rating]}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.name}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  );
}
