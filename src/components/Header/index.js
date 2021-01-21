import React from "react";
import { NavLink } from "react-router-dom";

import './style.scss';

function Header() {
  return (
    <header>
      <nav className="main-menu">
        <ul>
          <li><NavLink className="main-menu__link" exact to="/">Home</NavLink></li>
          <li><NavLink className="main-menu__link" to="/users">Users</NavLink></li>
          <li><NavLink className="main-menu__link" to="/form">Form</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;


