import React from 'react';
import TodoItem from './todo-item'

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (

        <ul>
            {
                todos.map( todo => <TodoItem todo = { todo } updateTodo = {updateTodo} deleteTodo = {deleteTodo} />)
            }
        </ul>
    )
}

export default TodoList;