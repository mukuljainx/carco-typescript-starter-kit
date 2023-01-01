import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import {
  IAuthContextValue,
  IAuthState,
} from '@yourServiceName/components/auth/types';
import {
  getCurrentUser,
  initiateAmplify,
  signIn,
  signOut,
} from '@yourServiceName/amplify';

interface AuthProviderProps {
  children: ReactNode;
}

const initialAuthState: IAuthState = {
  user: null,
  loading: true,
  error: null,
};

const AuthContext = createContext<IAuthContextValue>({
  ...initialAuthState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

const useAuth = () => useContext(AuthContext);

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(initialAuthState.user);
  const [error, setError] = useState(initialAuthState.error);
  const [loading, setLoading] = useState(initialAuthState.loading);

  const login = async (username: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const user = await signIn(username, password);

      setUser({
        username: user.username,
        email: user.attributes.email,
        firstName: user.attributes.firstName,
        lastName: user.attributes.lastName,
        // TODO
        role: 'EDITOR',
      });
    } catch (error: any) {
      console.log('Error while logging in user', error);

      setError({
        type: 'login',
        code: error.code,
      });
    }

    setLoading(false);
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut();
    } catch (error: any) {
      console.log('Error while logging out user', error);

      setError({
        type: 'logout',
        code: error.code,
      });
    }

    setUser(null);
  };

  useEffect(() => {
    const setCurrentUser = async () => {
      setLoading(true);

      try {
        const user = await getCurrentUser();

        setUser({
          username: user.username,
          email: user.attributes.email,
          firstName: user.attributes.firstName,
          lastName: user.attributes.lastName,
          // TODO
          role: 'EDITOR',
        });
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initiateAmplify();

    setCurrentUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
