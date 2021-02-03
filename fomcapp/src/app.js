import React, { Suspense,  } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import Loader from 'fomcapp/Loader';
import FomcHeader from './Header.jsx';
import FomcSidebar from './Sidebar.jsx';
import FomcContent from './Content.jsx';

// const FomcHeader = React.lazy(() => import('fomcapp/Header'));
// const FomcSidebar = React.lazy(() => import('fomcapp/Sidebar'));
// const FomcContent = React.lazy(() => import('fomcapp/Content'));
// const CustomersTable = React.lazy(() => import('customers/Table'));
// const OrdersTable = React.lazy(() => import('orders/Table'));
// const TasksTable = React.lazy(() => import('tasks/Table'));

const App = ({ title }) => {
  // const dispatch = useDispatch();

  // const { set, clear } = useSelector(
  //   (state) => state.tasks,
  // )


  return (
    <Router>
      <Suspense fallback={<div>loading..</div>}>
        <FomcHeader />
        <FomcSidebar />
        <FomcContent />
        {/* <CustomersTable />
        <OrdersTable /> */}
        
        <h1>{title}</h1>
      </Suspense>
    </Router>
  );
};

export default App;
