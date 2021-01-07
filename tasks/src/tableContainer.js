import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { set, clear } from './store/slices/tasksSlice';

const Table = React.lazy(() => import('tasks/Table'));
const TableActions = React.lazy(() => import('tasks/TableActions'));

const TableContainer = ({ tasks }) => {
  

  return (
    <div>
      <TableActions />
      <Table tasks={tasks} />
    </div>
  );
};


const stateToProps = state => ({
  tasks: state.tasks.list,
  userId: state.tasks.userI
})

export default connect(stateToProps)(TableContainer);