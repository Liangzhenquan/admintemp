import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '@/components/Loading';
const Login = lazy(() => import('@/views/Login'));

const NoMatch = lazy(() => import('@/views/error/NoMatch'));
const Home = lazy(() => import('@/containers'));

//二级页面
const Item1 = lazy(() => import('@/views/home/Item1'));
const Item2 = lazy(() => import('@/views/home/Item2'));
const Item3 = lazy(() => import('@/views/home/Item3'));
const Item4 = lazy(() => import('@/views/home/Item4'));
const routes = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/404',
    exact: true,
    component: NoMatch
  },
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/item1',
        component: Item1
      },
      {
        path: '/item2',
        component: Item2
      },
      {
        path: '/item3',
        component: Item3
      },
      {
        path: '/item4',
        component: Item4
      }
    ]
  }
];
function RouteWithRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <React.Suspense fallback={<Loading />}>
          <route.component {...props} routes={route.routes} />
        </React.Suspense>
      )}
    />
  );
}
function RouteWithSubRoutes({ routes }) {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/item1" />
      </Route>
      {routes.map((route, i) => (
        <RouteWithRoutes key={i} {...route} />
      ))}
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}

export { routes, RouteWithRoutes, RouteWithSubRoutes };
