import { createContext, useContext } from 'react';

export type Profile = {
  name: string;
};

type ProfileStateType = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

export const initialState: ProfileStateType = {
  profile: { name: '' },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setProfile: () => {},
};

export const ProfileContext = createContext(initialState);

export const useProfileContext = (): ProfileStateType =>
  useContext(ProfileContext);

export default ProfileContext;
