import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import style from './src/styles/index';
import App from './src/components/App.jsx';
import Store from './src//store/store';

ReactDOM.render(
  <Provider store={Store}>
      <App />
  </Provider>,
  document.getElementById('root')
);