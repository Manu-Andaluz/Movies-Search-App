import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <h4>Henry</h4>
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
