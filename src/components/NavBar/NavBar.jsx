import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="flex justify-between bg-white border-gray-200 p-5 sm:px-4 dark:bg-gray-900">
        <div className="flex">
          <h4 className="text-slate-100  ">Movie App</h4>
        </div>

        <ul className="flex">
          <li className="list-item ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-sky-400 px-5" : "text-slate-100 px-5"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/favs"
              className={({ isActive }) =>
                isActive ? "text-sky-400 px-5" : "text-slate-100 px-5"
              }
            >
              Favoritas
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
