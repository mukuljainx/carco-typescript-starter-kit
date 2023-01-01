import React, { FC, ReactNode } from 'react';
import { Navigate } from '@yourServiceName/router';
import { useAuth } from '@yourServiceName/components/auth/AuthProvider';

interface AuthenticatedProps {
  children: ReactNode;
}

const Authenticated: FC<AuthenticatedProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate routeId="signIn" />;
  }

  return <>{children}</>;
};

export default Authenticated;
