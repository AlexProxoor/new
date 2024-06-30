import React, { useState } from 'react'

const TodoInput = ({ onAddTodo }) => {
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        if (query.trim()) {
            onAddTodo(query)
            setQuery('')
        }
    }

    return (
        <form className="form">
            <input
                type="text"
                placeholder="Enter your to-do"
                value={query}
                onChange={handleChange}
                className="input"
            />
            <button onClick={handleClick} className="button">
                Add
            </button>
        </form>
    )
}

export default TodoInput
