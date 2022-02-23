import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  // Events
  const handleDelete = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  const handleComplete = () => {
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el;
    }));
  };
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
      <button onClick={handleComplete} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={handleDelete} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
