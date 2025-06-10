import { useState } from 'react';
import './App.css';

function App() {
  //create an array, and for each item in that array we'll create (and display) a <li> element
  const todoList = ['this', 'is', 'a', 'test'];

  const listElements = todoList.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <>
      <div className='form--container'>
        <h1>TODO List</h1>
        <form>
          <input type='text' placeholder='Add something to your list'></input>
          <button>Add to List</button>
        </form>
      </div>
    </>
  );
}

export default App;
