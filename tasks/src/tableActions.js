import React from 'react';
import { connect } from 'react-redux'
import { set, clear } from './store/slices/tasksSlice';

const Actions = ({ userId, set, clear }) => {
  // console.log('userId: ', userId);
  return (
    <div>
      <button onClick={() => {
        console.log('set action creator with userId: ', userId);
        set({userId});
      }}>
        Get Tasks
      </button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

// const stateToProps = state => ({
//   tasks: state.tasks.list,
// });

const dispatchToProps = { set, clear };

export default connect(null, dispatchToProps)(Actions);