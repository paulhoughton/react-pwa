import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

const rootEl = document.getElementById('root');
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
         <App />
      </AppContainer>,
      rootEl
    );
  });
}

import { install } from 'offline-plugin/runtime';
install();
