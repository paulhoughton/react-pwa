import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout';
import About from './components/About';
import Home from './components/Home';

function hideDrawer() {
  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
  document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
}

export default () => (
  <Router history = { hashHistory } onUpdate = { hideDrawer } >
    <Route path ="/" component= { Layout } title = "PWA">
      <IndexRoute component = { Home } />
      <Route path ="about" component= { About } />
    </Route>
  </Router>
);
