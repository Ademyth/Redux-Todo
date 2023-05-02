import { createStore } from 'redux';

const initialState = {
  tasks: [],
  filter: 'all'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
