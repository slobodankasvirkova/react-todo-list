import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header'
import Footer from '../components/footer'
import TodoList from '../components/todo-list'

const BaseRoute = ({ todos: allTodos, categories, updateTodo, addTodo, deleteTodo }) => {

    const { status } = useParams();
    const { category } = useParams();

    const completedFilter = status === "completed";
    const todos = allTodos.filter(({ completed, category: todoCat }) => ( !status || completed === completedFilter ) &&
    ( !category || todoCat === category ));

    return (
        <div>
            <Header 
            addTodo = {addTodo}
            status = {status}
            />
            <TodoList 
            todos = {todos}
            updateTodo = {updateTodo}
            deleteTodo = {deleteTodo}
            />
            <Footer 
            status = { status }
            category = { category }
            />
        </div>
    );
}
export default BaseRoute;