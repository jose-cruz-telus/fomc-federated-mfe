import React from 'react';
// import { connect } from 'react-redux'
// const { set, clear } = React.lazy(() => import('tasks/TasksSlice'));
// import { set, clear } from 'tasks/TasksSlice';
// import { set, clear } from 'tasks/TasksSlice';

const TasksTable = ({ tasks }) => {

  return (
    <div>
      {/* <button onClick={set}>Get tasks</button> */}
      {tasks && Array.isArray(tasks) && tasks.length > 0 ? (
        <div>
          {tasks.map(({ name, val }) => (
            <div className="task-row">
              <p>{name}     -     {val}</p>
              <br />
              <br />
            </div>
          ))}
        </div>
      ) : <div>I am the tasks table</div>
      }
      {/* <button onClick={clear}>Clear</button> */}
    </div>
  );
}

// const mapStateToProps = state => ({
//   tasks: state.tasks,
// })
// const mapDispatchToProps = { set, clear };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TasksTable)

export default TasksTable;
