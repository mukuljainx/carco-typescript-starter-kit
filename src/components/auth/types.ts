import { IUser } from 'src/types/user';

export type TAuthError = {
  type: string;
  code: string;
};

export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: TAuthError | null;
}

export interface IAuthContextValue extends IAuthState {
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}
