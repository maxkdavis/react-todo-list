import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; //if localStorage is null, short-circuit to emprty array
  const [todo, setToDo] = useState('');
  const [todos, setToDos] = useState(savedTodos);

  //save todos to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // const listElements = todos.map((todo, index) => <li key={index}>{todo}</li>);
  const listElements = todos.map((todo, index) => (
    <div key={index} className='list-item-box'>
      <span>{todo}</span>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  ));

  function handleChange(e) {
    setToDo(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault(); //prevent default form submitting (reload) behavior
    if (todo.trim() === '') return; //prevents adding empty tasks
    setToDos((prevToDos) => [...prevToDos, todo]);
    setToDo(''); //clears input
  }

  //element, index, array
  //so if we want to skip the first paramenter, element, we have to denote '_'. see below

  //delete button functionality
  function handleDelete(indexToDelete) {
    setToDos((prevToDos) => prevToDos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <div className='form--container'>
        <h1>TODO List</h1>
        <form onSubmit={handleAddItem}>
          <input type='text' placeholder='Add something to your list' value={todo} onChange={handleChange}></input>
          <button>Add to List</button>
        </form>
        <div className='list--container'>{todos.length === 0 ? 'Nothing to do today...' : listElements}</div>
      </div>
    </>
  );
}

export default App;
