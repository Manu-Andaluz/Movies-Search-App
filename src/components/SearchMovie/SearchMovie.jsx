import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../actions";

export default function SearchMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies("avengers"));
  }, []);

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getMovies(title));
    setTitle("");
  };

  return (
    <form
      className="flex items-center justify-center"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search Movie..."
        className="bg-gray-100 text-sm focus:ring-blue-500 focus:border-blue-500 block sm:w-96 2xl:w-3/5 px-8 py-2.5 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="title"
        autoComplete="off"
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" className="bg-gray-100 text-sm px-8 py-2.5">
        <svg
          class="w-4 h-5 text-gray-900"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
    </form>
  );
}
