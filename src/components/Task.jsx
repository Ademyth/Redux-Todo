import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description } });
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Task;
