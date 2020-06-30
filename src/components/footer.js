import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ status, category }) => {
    const generateFilterRoute = ( filter = "") => ["/", category, filter && category ? "/" : "", filter].join("");
    const show = status === "active"
    ? "active"
    : status === "completed" ? "completed" : "all"
    return (
        <div>
            <ul className="filters">
            <li><Link className={ show === "all" ? "selected" : ""} to={generateFilterRoute()}>All</Link></li>
            <li><Link className={ show === "active" ? "selected" : ""} to={generateFilterRoute('active')}>Active</Link></li>
            <li><Link className={ show === "completed" ? "selected" : ""} to={generateFilterRoute('completed')}>Completed</Link></li>
            </ul>
        </div>
    )
}

export default Footer;