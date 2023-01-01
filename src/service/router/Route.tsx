import { Route as RRDRoute, PathRouteProps } from 'react-router-dom';
import routes, { RoutesIdType } from './routes';

interface RouteProps extends Omit<PathRouteProps, 'path'> {
  id: RoutesIdType;
}

const Route = ({ id, ...rest }: RouteProps) => {
  const { path, type } = routes[id];
  if (process.env.NODE_ENV === 'production' && type === 'DEVELOPMENT') {
    return null;
  }

  return <RRDRoute {...rest} path={path} id={id} />;
};

// @ts-ignore
Route.type = RRDRoute;

export type { RouteProps };
export default Route;
