import routes, { RoutesIdType } from './routes';

const withPath = (routeId: RoutesIdType) => {
  const { path, type } = routes[routeId];
  if (process.env.NODE_ENV === 'production' && type === 'DEVELOPMENT') {
    return { path: '404', id: '404' };
  }
  return { path, id: path };
};

export { withPath };
