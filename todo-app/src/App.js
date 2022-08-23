import React, {useState} from "react";
import Form from './components/form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])

  return (
<div className="App">
  <header>
  <h1> Milen's ToDo List {inputText}</h1>
  </header> 
  <Form  inputText ={inputText} todos ={todos} setTodos={setTodos} setInputText={setInputText} />
  <TodoList setTodos={setTodos} todos ={todos} />
  </div> 
    );
}

export default App;
