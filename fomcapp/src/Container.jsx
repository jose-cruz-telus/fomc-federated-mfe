import React from 'react';
import { connect } from 'react-redux';
// import Slice, { set, clear } from 'tasks/TasksSlice';


const TasksTable = React.lazy(() => import('tasks/Table'));
const TasksActions = React.lazy(() => import('tasks/TableActions'));

const Container = ({ pulledDomain, userId, tasks }) => {
  return (
    <div>
      {pulledDomain === 'tasks' && (
        <>
          <TasksActions userId={userId} />
          <TasksTable tasks={tasks} />
        </>
      )}
      {pulledDomain === 'orders' && (
        <>
          {/* <TasksActions />
          <TasksTable userId={userId} tasks={tasks} /> */}
        </>
      )}
    </div>
  );
};


const mapStateToProps = state => ({
  tasks: state.tasks.list,
});

// const mapDispatchToProps = { set, clear };

// console.log('FOMC APP - Container - mapDispatchToProps: ', mapDispatchToProps);

export default connect(mapStateToProps)(Container);
// export default Container;
