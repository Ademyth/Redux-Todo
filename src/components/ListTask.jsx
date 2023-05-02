import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector(state => {
    switch (state.filter) {
      case 'done':
        return state.tasks.filter(task => task.isDone);
      case 'notDone':
        return state.tasks.filter(task => !task.isDone);
      default:
        return state.tasks;
    }
  });
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch({ type: 'SET_FILTER', payload: e.target.value });
  };

  return (
    <div>
      <select onChange={handleFilter}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
