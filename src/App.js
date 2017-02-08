import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

import About from './components/About';
import Home from './components/Home';

const RouteHideDrawer = ({ component: Component, ...rest }) => (
  <Route {...rest} render={() => {
    if (document.querySelector('.mdl-layout__drawer')) {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
      document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
    }
    return <Component/>
  }}/>
)

export default () => (
  <Router>
    <Layout fixedHeader>
      <Header title="PWA"/>
      <Drawer title="PWA">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navigation>
      </Drawer>
      <Content>
        <RouteHideDrawer exact path="/" component={ Home } />
        <RouteHideDrawer path="/about" component={ About } />
      </Content>
    </Layout>
  </Router>
);
