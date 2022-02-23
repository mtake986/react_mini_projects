import React from 'react';
import Todo from './Todo';
const TodoList = ({ setTodos, todos, filteredTodos }) => {
  return (
    <>
      <div className='todo-container'>
        <ul className='todo-list'>
          {filteredTodos.map(todo => (
            <Todo setTodos={setTodos} todos={filteredTodos} key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoList;
