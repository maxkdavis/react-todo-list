import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setToDo] = useState(''); //initializes value of the input to empty string
  const [todos, setToDos] = useState([]);

  const listElements = todos.map((item, index) => {
    <li key={index}>{item}</li>;
  });

  function handleChange(e) {
    setToDo(e.target.value);
  }

  function handleAddToDo() {
    if (todo.trim() === '') return; //prevents adding empty tasks
    setToDos((prevToDo) => {
      [...prevToDo, todo];
    });
    setToDo(''); //clears input
  }

  return (
    <>
      <div className='form--container'>
        <h1>TODO List</h1>
        <form>
          <input type='text' placeholder='Add something to your list' value={todo} onChange={handleChange}></input>
          <button onClick={handleAddToDo}>Add to List</button>
        </form>
        <div className='list--container'>{listElements}</div>
      </div>
    </>
  );
}

export default App;
