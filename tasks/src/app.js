import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import Loader from 'fomcapp/Loader';
import store from './store/store';
import TableContainer from './tableContainer'
// import TableActions from './tableActions';


// const FomcHeader = React.lazy(() => import('fomcapp/Header'));
// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));
// const Table = React.lazy(() => import('tasks/Table'));

// import FomcSidebar from 'fomcapp/Sidebar';
// import CustomersTable from 'customers/Table'

const App = ({ title }) =>
<Provider store={store}>
  <Suspense fallback={<Loader />}>
    <div>
      {/* <FomcHeader /> */}
      {/* <FomcSidebar /> */}
      <TableContainer />
      <h1>{title}</h1>
    </div>
  </Suspense>
</Provider>

export default App;