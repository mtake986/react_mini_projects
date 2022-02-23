import { useEffect } from "react";
import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, status, filteredTodos, setFilteredTodos }) => {
  // Here I can write javascript code and func.
  // todo: Get input and store it in setInputText
  const handleInputText = e => {
    setInputText(e.target.value);
  };
  // todo: Generate id, use uuid
  const generateId = () => {
    const letters = "1234567890qwertyuiopasdfghjklzxcvbnm!#$%&="
    const idLength = Math.floor(Math.random() * 10 + 10) // 10 to 19
    var id = "";
    for (let i = 0; i < idLength; i++) {
      var index = Math.floor(Math.random() * letters.length) 
      id += letters[index]
    }
    return id
  }

  // todo: Clear the input after submiiting the value
  const handleSubmitTodo = e => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: generateId() },
      ]);
      setInputText("")
    } else {
      alert("Please enter a what-to-do!!!")
    }
  };
  // todo: get the filter value
  const handleSetStatus = (e) => {
    setStatus(e.target.value)
  }
  // useEffect(() => {
  //   console.log(filteredTodos)
  //   if (status === "completed") {
  //     setFilteredTodos(todos.filter((todo) => (todo.completed === true)))
  //     console.log(`${status}, "completed"`)
  //     return filteredTodos
  //   } else if (status === "uncompleted") {
  //     setFilteredTodos(todos.filter((todo) => (todo.completed === false)))
  //     console.log(`${status}, "uncompleted"`)
  //     return filteredTodos
  //   } else {
  //     filteredTodos = todos
  //     return filteredTodos
  //   }
  // }, [status])

  return (
    <form>
      <input onChange={handleInputText} type='text' className='todo-input' value={inputText} />
      <button onClick={handleSubmitTodo} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={handleSetStatus} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
