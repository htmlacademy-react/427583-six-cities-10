import { PlaceCardType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlaceCardProps = {
  placeCard: PlaceCardType,
}

export default function NearPlacesPlaceCard({ placeCard }: PlaceCardProps): JSX.Element {
  return (
    <article className="near-places__card place-card">
      {placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={placeCard.image} width="260" height="200" alt="Place"/>
        </a>
      </div>

      <PlaceCard placeCard={placeCard}/>
    </article>
  );
}
