export type Offer = {
  id: string;
  image: string;
  price: number;
  name: string;
  type: string;
  isPremium: boolean;
  rating: Rating;
}

type Rating = 0 | 1 | 2 | 3 | 4 | 5;
