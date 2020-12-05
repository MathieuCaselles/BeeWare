import { GeolocationPosition } from '@capacitor/core';

export interface Profile {
  id: string;
  username: string;
  picture: string | null;
  position: GeolocationPosition;
}

export const defaultProfile: Profile = {
  id: '0',
  username: 'John Doe',
  picture: null,
  position: {} as GeolocationPosition,
};
