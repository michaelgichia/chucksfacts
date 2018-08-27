/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { AppBar, Footer } from './elements';

/**
 * Asynchronously loads the containers
 */

/* prettier-ignore */
const HomePage = Loadable({
  loader: () => import('../HomePage'/* webpackChunkName: "HomePage" */),
  loading: () => null,
});

/* prettier-ignore */
const Category = Loadable({
  loader: () => import('../Category'/* webpackChunkName: "Category" */),
  loading: () => null,
});

/* prettier-ignore */
const NotFoundPage = Loadable({
  loader: () => import('../NotFoundPage'/* webpackChunkName: "NotFoundPage" */),
  loading: () => null,
});

export default function App() {
  return (
    <React.Fragment>
      <AppBar>
        <Link to="/">Chucks Facts</Link>
      </AppBar>
      <main style={{ minHeight: '70vh' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jokes/random" component={Category} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer>
        <Link to="https://github.com/michaelgichia/chucksfacts">
          Source code
        </Link>
        <Link to="https://linkedin.com/in/michaelgichia/">LinkedIn</Link>
        <Link to="https://twitter.com/mike_gichia">Twitter</Link>
      </Footer>
    </React.Fragment>
  );
}