import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

import React, { Component } from 'react';
import { HashRouter, Match, Link } from 'react-router';

import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

import About from './components/About';
import Home from './components/Home';

class MatchAndHideDrawer extends Component {
  componentWillUpdate() {
    document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
    document.querySelector('.mdl-layout__drawer').classList.remove('is-visible');
  }
  render() {
    return <Match {...this.props} />;
  }
}

export default () => (
  <HashRouter>
    <Layout fixedHeader>
      <Header title="PWA"/>
      <Drawer title="PWA">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navigation>
      </Drawer>
      <Content>
        <MatchAndHideDrawer exactly pattern="/" component={ Home } />
        <MatchAndHideDrawer pattern="/about" component={ About } />
      </Content>
    </Layout>
  </HashRouter>
);
