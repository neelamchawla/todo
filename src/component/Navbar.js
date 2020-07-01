import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <>
        <h1 htmlFor="todo"><b>TODO LIST</b></h1>
        <nav className="navbar red darken-3">
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="/todo1">Todo 1</Link></li>
                    <li><NavLink to="/todo2">Todo 2</NavLink></li>
                    <li><NavLink to="/todo3">Todo 3</NavLink></li>
                    <li><NavLink to="/redux">Redux</NavLink></li>
                    {/* <li><NavLink to="/todo5">Todo 5</NavLink></li> */}
                    
                </ul>
        </nav>
    </>
  )
}

export default Navbar;