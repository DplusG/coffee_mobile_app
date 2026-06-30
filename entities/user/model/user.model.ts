import { atom } from 'jotai';
import { UserState } from './user.types';

export const profileAtom = atom<UserState>({
  profile: null,
  isLoading: false,
  isError: null,
});
