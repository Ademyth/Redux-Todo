import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), description, isDone: false } });
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
