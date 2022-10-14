import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

export default function Movie() {
  let movieID = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    movieID = movieID.id
      .split("")
      .filter((e) => e !== ":")
      .join("");
    dispatch(getMovieDetail(movieID));
  });

  const state = useSelector((state) => state.movieDetail);

  return (
    <div className="movie-detail">
      <h1>{state.Title}</h1>
      <h2>{state.Director}</h2>
      <h3>{state.Year}</h3>
      <img src={state.Poster} />
    </div>
  );
}
