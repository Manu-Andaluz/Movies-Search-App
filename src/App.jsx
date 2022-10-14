import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
