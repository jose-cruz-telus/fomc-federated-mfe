import { combineReducers } from '@reduxjs/toolkit'
import tasks from './slices/tasksSlice';

const rootReducer = combineReducers({
  tasks
})

export default rootReducer