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
        <a href="https://github.com/michaelgichia/chucksfacts" target="_blanck">
          Source Code
        </a>
        <a href="https://linkedin.com/in/michaelgichia/" target="_blanck">
          LinkedIn
        </a>
        <a href="https://twitter.com/mike_gichia" target="_blanck">
          Twitter
        </a>
      </Footer>
    </React.Fragment>
  );
}