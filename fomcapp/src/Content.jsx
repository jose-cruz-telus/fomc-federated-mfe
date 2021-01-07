import React from 'react';
import { Switch, Route } from "react-router-dom";
// import OrdersSearch from 'orders/OrdersSearch'

const Dashboard = React.lazy(() => import('fomcapp/Dashboard'));
const CustomersSearch = React.lazy(() => import('customers/CustomersSearch'));
const OrdersSearch = React.lazy(() => import('orders/OrdersSearch'));
const TasksSearch = React.lazy(() => import('tasks/TasksSearch'));


const Content = ({ domain }) => {

  return (
    <div className={`FOMC-content-${domain}`}>
      <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/customers">
            <CustomersSearch />
          </Route>
          <Route path="/orders">
            <OrdersSearch />
          </Route>
          <Route path="/tasks">
            <TasksSearch />
          </Route>
        </Switch>
    </div>
  )
}

export default Content;