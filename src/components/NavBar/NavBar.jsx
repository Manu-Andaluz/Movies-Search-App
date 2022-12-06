import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="flex justify-around bg-white shadow-md px-5 py-6 sm:px-4 items-center">
        <div className="flex ">
          <Link to="/" className="text-blue-600 font-semibold text-xl ">
            Movies App
          </Link>
        </div>

        <div className="flex"></div>

        <ul className="flex ">
          <li className="list-item ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 px-5 lg:text-lg sm:text-sm font-semibold"
                  : "text-black px-5 lg:text-lg sm:text-sm"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/favs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 px-5 lg:text-lg sm:text-sm font-semibold"
                  : "text-black px-5 lg:text-lg sm:text-sm"
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
