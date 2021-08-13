import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav >
            <h2>logo</h2>
            <ul  className="nav-links">
                <Link to='/Id'>
                <li>Id</li>
                </Link>
                <Link to='/Shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
    
}
export default Nav