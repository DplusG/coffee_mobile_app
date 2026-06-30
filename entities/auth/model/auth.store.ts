import { atom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AuthInfo, AuthState, LoginForm } from './auth.types';
import axios from 'axios';
import { API } from '../api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>(
  'auth',
  {
    info: null,
    isLoading: false,
    isError: null,
  },
  storage,
);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { username, password }: LoginForm) => {
    set(authAtom, {
      info: null,
      isLoading: true,
      isError: null,
    });

    try {
      const { data } = await axios.post<AuthInfo>(API.login, {
        username, // 'emilyspass'
        password, // 'emilyspass'
      });

      set(authAtom, {
        info: data,
        isLoading: false,
        isError: null,
      });
    } catch (e: unknown) {
      set(authAtom, {
        info: null,
        isLoading: false,
        isError: String(e),
      });
    }
  },
);
