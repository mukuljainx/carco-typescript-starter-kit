# @yourServiceName/router

All the components, hooks, interfaces which are available from `react-router-dom` are exposed here as well.

## Usage

```jsx
import {Route, withPath, Navigate, Link} from '@yourServiceName/router';

<Route {...withPath('home')} element={<PrivatePages />} />

<Navigate routeId="signIn" />

<Link routeId="signUp">Sign up for free</Link>

<Link routeId="organizations.projects.projectId" pathParam={{projectId: 'project-1'}}>Sign up for free</Link>

```

### What is `routeId`

`routeId` is unique key for any path, which contains the actual path for example `/organizations/projects/:projectId`.

this file: `src/service/router/routes.ts`, contains all the routes.

```jsx
const testRoutes = {
  flowEngineTest: {
    path: 'flow-engine-test',
    type: 'DEVELOPMENT',
  },
};
```

> Do not import routes.ts outside of @yourServiceName/service!

### How to add a new route

Add any new route to `src/service/router/routes.ts` with appropriate type (`'DEVELOPMENT' | 'PRODUCTION'`).

Then the `routeId` is available to use.
