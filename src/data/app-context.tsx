import React from 'react';
import { Riddle, defaultRiddles } from '../models/Riddle';
import { Profile, defaultProfile } from '../models/Profile';
// import { GeolocationPosition } from '@capacitor/core';
interface AppContext {
  initContext: () => void;
  riddles: Riddle[];
  updateRiddle: (updatedRiddle: Riddle) => void;
  profile: Profile;
  updateProfile: (updatedProfile: Profile) => void;
  // updatePosition: (updatedPosition: GeolocationPosition) => void;
}

const AppContext = React.createContext<AppContext>({
  initContext: () => {},
  riddles: defaultRiddles,
  updateRiddle: () => {},
  profile: defaultProfile,
  updateProfile: () => {},
  // updatePosition: () => {},
});

export default AppContext;
