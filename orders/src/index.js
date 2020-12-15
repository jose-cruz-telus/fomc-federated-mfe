import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
 
const title = 'FOMC FEDERATED MFE';
 
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
