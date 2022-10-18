import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetail } from "../../actions/index";

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
    <div className="flex m-auto p-5 text-white">
      <img src={state.Poster} />

      <div className="grid gap-3 place-content-center mt-3 p-4">
        <h1 className="">{state.Title}</h1>
        <h2>Plot: {state.Plot}</h2>

        <div className="flex">
          <h2 className="mr-4">Director: {state.Director}</h2>
          <h3>Cast: {state.Actors}</h3>
        </div>
        <div className="flex">
          <h4 className="mr-4">Genre: {state.Genre}</h4>
          <h4>Release Year: {state.Year}</h4>
        </div>

        <h4>{state.Runtime}</h4>
        <p>{state.Awards}</p>
        <p>{state.imdbRating}</p>
      </div>
    </div>
  );
}

/*
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "6.7/10"
},
{
"Source": "Rotten Tomatoes",
"Value": "69%"
},
{
"Source": "Metacritic",
"Value": "59/100"
}
],
*/
