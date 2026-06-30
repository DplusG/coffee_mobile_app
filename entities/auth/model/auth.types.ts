export interface LoginForm {
  username: string;
  password: string;
}

export interface AuthInfo {
  accessToken: string | null;
  refreshToken: string | null;
  username: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  gender?: string | null;
  id?: string | null;
  image?: string | null;
}

export interface AuthState {
  info: AuthInfo | null;
  isLoading: boolean;
  isError: string | null;
}
