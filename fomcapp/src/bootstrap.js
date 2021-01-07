import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const title = 'FOMC FEDERATED MFE - APP';

ReactDOM.render(
  // <Provider store>
    <App title={title} />,
  // </Provider>,
  document.getElementById('app')
);

module.hot.accept();
