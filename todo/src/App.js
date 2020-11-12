import React from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
import AddItem from './Components/AddItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AddItem />
          <ToDoList />
      </header>
    </div>
  );
}

export default App;
