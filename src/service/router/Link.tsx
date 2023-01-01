import { Link as RRDLink, LinkProps as RRDLinkProps } from 'react-router-dom';
import routes, { RoutesIdType } from './routes';
import { compile } from 'path-to-regexp';

interface LinkProps extends Omit<RRDLinkProps, 'to'> {
  routeId: RoutesIdType;
  // TODO: make this more type safe & dev friendly using automatic type generation form links
  pathParam?: Record<string, number | string>;
}

const Link = ({ routeId, pathParam = {}, ...rest }: LinkProps) => {
  const { path, type } = routes[routeId];
  if (process.env.NODE_ENV === 'production' && type === 'DEVELOPMENT') {
    return null;
  }

  const link = compile(path, { encode: encodeURIComponent })(pathParam);

  return <RRDLink {...rest} to={link} id={routeId} />;
};

export type { LinkProps };
export default Link;
