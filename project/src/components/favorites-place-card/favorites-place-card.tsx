import { PlaceCardType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlaceCardProps = {
  placeCard: PlaceCardType,
}

export default function FavoritesPlaceCard({ placeCard }: PlaceCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={placeCard.image} width="150" height="110" alt="Place"/>
        </a>
      </div>

      <PlaceCard placeCard={placeCard} className={'favorites__card-info'}/>
    </article>
  );
}
