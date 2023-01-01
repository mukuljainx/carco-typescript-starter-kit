type RoutesMeta = {
  path: string;
  type: 'DEVELOPMENT' | 'PRODUCTION';
};

// type S = {
//   getPath: never;
//   [k: string]: S | T;
// };

// export interface RoutesConfig {
//   [k: string]: T | S;
// }

const prodRoutes = {
  '*': {
    path: '*',
    type: 'PRODUCTION',
  },
  home: {
    path: '/',
    type: 'PRODUCTION',
  },
  signIn: {
    path: '/sign-in',
    type: 'PRODUCTION',
  },
  signUp: {
    type: 'PRODUCTION',
    path: '/sign-up',
  },
  confirmUser: {
    type: 'PRODUCTION',
    path: '/confirm-user',
  },
  forgotPassword: {
    type: 'PRODUCTION',
    path: '/forgot-password',
  },
};

const routes = {
  ...prodRoutes,
};

export type RoutesIdType = keyof typeof routes;

export default routes as Record<RoutesIdType, RoutesMeta>;
