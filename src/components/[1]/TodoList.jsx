import React, { useState } from 'react'
import TodoItem from './TodoDelete'
import TodoInput from './TodoInput'
import './ToDo.css'

function TodoList() {
  const [arrToDo, setArrToDo] = useState([])

  const handleAddTodo = (newTodo) => {
    setArrToDo([...arrToDo, newTodo])
  }

  const handleDelete = (index) => {
    const newTodos = [...arrToDo]
    newTodos.splice(index, 1)
    setArrToDo(newTodos)
  }

  return (
    <div className="container">
      <p className="description">
        [1] Задание. Реализовать Todo List с помощью функциональных компонентов, должна быть
        реализована логика по добавлению введенного пользователем значения в форме
        в общий список всех дел пользователя.
      </p>
      <TodoInput onAddTodo={handleAddTodo} />
      <ul className="list">
        {arrToDo.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
