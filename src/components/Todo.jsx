import React from 'react'
import { useState } from 'react';

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleRemoveTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your task"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

