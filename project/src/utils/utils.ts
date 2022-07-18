export enum HousingType {
  Apartment = 'Apartment',
  PrivateRoom = 'Private Room',
}

export function genetateUniqueId(): string {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
}
