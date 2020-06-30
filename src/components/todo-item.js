import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const { completed, title, id } = todo;
    const cls = completed ? 'completed' : '';
    return (
       <li 
       className={ `${cls}` } 
       onDoubleClick = {() => updateTodo({
           ...todo,
           completed: !completed
       })}
       >{ title }
        <button className="hide-button" onClick = {() => deleteTodo(id)}>X</button>
       </li>
    )
}

export default TodoItem;