import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { routes, RouteWithRoutes } from './router';
import 'normalize.css';
import './styles/index.less';
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithRoutes key={i} {...route} />
          ))}
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
