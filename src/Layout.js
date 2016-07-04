// import React from 'react';
import 'react-mdl/extra/material';
import 'react-mdl/extra/material.css';

import React from 'react';
import { Link } from 'react-router';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

export default ({ children, route : { title } }) => (
  <Layout fixedHeader>
    <Header title= { title }/>
    <Drawer title= { title }>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Navigation>
    </Drawer>
    <Content>{children}</Content>
  </Layout>
);
