export interface User {
  id: string;
  name: string;
  surname?: string;
  photo?: string;
}

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  isError: string | null;
}
