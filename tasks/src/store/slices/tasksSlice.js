import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    // in case cart was saved items, will be here:
    initialState: {
      list: [],
      userId: null,
    },
    // reducers actions
    reducers: {
        // get tasks action
        set: {
          reducer(state, action) {
            const { userId } = action.payload
            console.log(action)
            console.log('setting tasks, with userId: ', userId);
            return {
              ...state,
              list: [
                { name: 'task1', val: 1, id: '000000' },
                { name: 'task2', val: 2, id: '000001' }
              ],
              userId: userId || null,
            };
          }
        },
        clear: state => {
          console.log('clearing tasks')
          return {
            ...state,
            list: [],
          };
        },
    }
});

const { actions, reducer } = tasksSlice;
export const { set, clear } = actions;
console.log('from tasks slice - set: ', set);
export default reducer;
