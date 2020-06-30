import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from './data/data';
import Dashboard from './routes/dashbord';
import Category from './routes/category';
import './App.css';

function App() {
  const [todos, setTodos] = useState(data.todos);
  const [categories] = useState(data.categories)

  const updateTodo = (todo) => {
    const newTodos = todos.map((currentTodo) => {
      return currentTodo.id === todo.id ? todo : currentTodo;
    });
    setTodos(newTodos);
  };

  const addTodo = ( title, category ) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        completed: false,
        title,
        category
      }
    ]);
  };

  const deleteTodo = (deleteId) => {
    const newTodos = todos.filter(({ id }) => id !== deleteId);
    setTodos(newTodos);
  };

  return (

    <Router>
      <Switch>
      <Route exact path='/:status(active|completed)'>
          <Dashboard
            todos={todos}
            categories = {categories}
            updateTodo = {updateTodo}
            addTodo = {addTodo}
            deleteTodo = {deleteTodo}
          />
          </Route>
          <Route path='/:category/:status'>
          <Category 
          todos={todos}
          categories = {categories}
          updateTodo = {updateTodo}
          addTodo = {addTodo}
          deleteTodo = {deleteTodo}
          />
        </Route>
        <Route path='/:category'>
          <Category 
          todos={todos}
          categories = {categories}
          updateTodo = {updateTodo}
          addTodo = {addTodo}
          deleteTodo = {deleteTodo}
          />
        </Route>
        <Route path='/'>
          <Dashboard
            todos={todos}
            categories = {categories}
            updateTodo = {updateTodo}
            addTodo = {addTodo}
            deleteTodo = {deleteTodo}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
