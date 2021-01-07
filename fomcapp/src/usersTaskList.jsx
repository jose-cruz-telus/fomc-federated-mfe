import React from 'react';
import { Provider } from 'react-redux';
import TableContainer from './Container.jsx'

import TasksStore from "tasks/Store";

// const TasksStore = React.lazy(() => import('tasks/Store'));
const TasksTable = React.lazy(() => import('tasks/Table'));

export default () => {
  console.log("TasksStore: ", TasksStore);
  // debugger;

  return (
    <Provider store={TasksStore}>
      <TableContainer pulledDomain="tasks" userId="012345" />
    </Provider>
  );
};
