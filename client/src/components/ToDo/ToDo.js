import React from 'react';
import ToDoEntry from './ToDoEntry/ToDoEntry';
import ToDoList from './ToDoList/ToDoList';

function ToDo() {
  return (
    <div>
      {/* TodoEntry */}
      <ToDoEntry />
      <ToDoList />
    </div>
  );
}

export default ToDo;
