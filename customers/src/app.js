// noprotect
import React, { Suspense } from 'react';
import Loader from 'fomcapp/Loader';

// const FomcHeader = React.lazy(() => import('fomcapp/Header'));
// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));
const Table = React.lazy(() => import('customers/Table'));

// import FomcSidebar from 'fomcapp/Sidebar';
// import CustomersTable from 'customers/Table'

const App = ({ title }) =>
  <Suspense fallback={<Loader />}>
    <div>
      {/* <FomcHeader /> */}
      {/* <FomcSidebar /> */}
      <Table />
      <h1>{title} test</h1>
    </div>
  </Suspense>

export default App;
