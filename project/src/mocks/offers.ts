import { Offer } from '../types/types';
import { genetateUniqueId } from '../utils/utils';

export const mockOffers: Offer[] = [
  {
    id: genetateUniqueId(),
    image: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isPremium: true,
    rating: 4,
  },
  {
    id: genetateUniqueId(),
    image: 'img/room.jpg',
    price: 80,
    name: 'Wood and stone place',
    type: 'PrivateRoom',
    isPremium: false,
    rating: 5,
  },
  {
    id: genetateUniqueId(),
    image: 'img/apartment-02.jpg',
    price: 132,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isPremium: false,
    rating: 4,
  },
  {
    id: genetateUniqueId(),
    image: 'img/apartment-03.jpg',
    price: 180,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isPremium: true,
    rating: 5,
  },
];
