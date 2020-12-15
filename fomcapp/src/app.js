// noprotect
import React from 'react';
// const FomcHeader = React.lazy(() => import('fomcapp/Header'));
// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));

// import FomcHeader from 'fomcapp/Header';
// import FomcSidebar from 'fomcapp/Sidebar';
import FomcHeader from './Header.jsx';
import FomcSidebar from './Sidebar.jsx';

const App = ({ title }) =>
  <div>
    <FomcHeader />
    <FomcSidebar />
    <h1>{title}</h1>
  </div>;

export default App;
