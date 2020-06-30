import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ addTodo, status }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const onAddTodo = (e) => {
        e.preventDefault();
        addTodo(title, category);
        setTitle('');
        setCategory('');
    }

    const show = status === "work"
    ? "work"
    : status === "personal" ? "personal" : "shopping"

    return (
        <div id="myDIV" className="header">
            <Link to='/' class="todo-title"><h2>My To Do List</h2></Link>
            <form onSubmit={onAddTodo}>
                <input
                    type="text"
                    id="myInput"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add new todo item"
                />
                <input
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    placeholder="Category"
                />
                <input type="submit" value="submit"></input>
            </form>
            <ul className="">
            <li><Link className={ show === "all" ? "selected" : ""} to='/personal'>Personal</Link></li>
            <li><Link className={ show === "active" ? "selected" : ""} to='/work'>Work</Link></li>
            <li><Link className={ show === "completed" ? "selected" : ""} to='/shopping'>Shopping</Link></li>
            </ul>
        </div>
    )
}

export default Header;


