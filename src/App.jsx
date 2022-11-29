import React from "react";

import Favorites from "./components/Favorites/Favorites";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import FrontPage from "./components/FrontPage/FrontPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
