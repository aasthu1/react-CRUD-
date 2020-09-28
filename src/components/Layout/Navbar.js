import React from 'react';
import {NavLink} from 'react-router-dom'

const navbar=()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <NavLink  className="nav-link" exact to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
      </li>
      
    </ul>
  </div>
     <NavLink  className="btn btn-outline-light" to="/adduser">Add User</NavLink>

        </div>
</nav>
)}
export default navbar;