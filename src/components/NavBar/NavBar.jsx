import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="flex justify-between bg-white border-gray-200 px-5 py-6 sm:px-4 dark:bg-gray-900">
        <div className="flex">
          <h4 className="text-slate-100 lg:text-lg sm:text-sm ">Movie App</h4>
        </div>

        <ul className="flex">
          <li className="list-item ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 px-5 lg:text-lg sm:text-sm"
                  : "text-slate-100 px-5 lg:text-lg sm:text-sm"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/favs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 px-5 lg:text-lg sm:text-sm"
                  : "text-slate-100 px-5 lg:text-lg sm:text-sm"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
