import React from 'react'
import './ToDo.css'

function TodoDelete({ todo, onDelete }) {
  return (
    <li className="item">
      {todo}
      <button onClick={onDelete} className="deleteButton">Delete</button>
    </li>
  );
}

export default TodoDelete
