import React from 'react';
import { Riddle, defaultRiddles } from '../models/Riddle'
import { Profile, defaultProfile } from '../models/Profile'
interface AppContext {
    initContext: () => void,
    riddles: Riddle[],
    addRiddle: (newRiddle: Riddle) => void,
    deleteRiddle: (id: string) => void,
    updateRiddle: (updatedRiddle: Riddle) => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    riddles: defaultRiddles,
    addRiddle: () => { },
    deleteRiddle: () => { },
    updateRiddle: () => { },
    profile: defaultProfile,
    updateProfile: () => { }
});

export default AppContext