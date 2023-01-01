import {
  Navigate as RRDNavigate,
  NavigateProps as RRDNavigateProps,
} from 'react-router-dom';
import routes, { RoutesIdType } from './routes';
import { compile } from 'path-to-regexp';

interface NavigateProps extends Omit<RRDNavigateProps, 'to'> {
  routeId: RoutesIdType;
  // TODO: make this more type safe & dev friendly using automatic type generation form links
  pathParam?: Record<string, number | string>;
}

const Navigate = ({ routeId, pathParam = {}, ...rest }: NavigateProps) => {
  const { path, type } = routes[routeId];
  if (process.env.NODE_ENV === 'production' && type === 'DEVELOPMENT') {
    return null;
  }

  const link = compile(path, { encode: encodeURIComponent })(pathParam);

  return <RRDNavigate {...rest} to={link} />;
};

export type { NavigateProps };
export default Navigate;
