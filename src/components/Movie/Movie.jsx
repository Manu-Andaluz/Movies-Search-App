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
    <div className="grid place-content-center rounded w-3/5 m-auto p-5 text-white my-5 text-white">
      <img src={state.Poster} className="m-auto rounded-lg" />

      <div className="grid gap-3 place-content-center m-auto p-4">
        <h1 className="font-semibold text-lg m-auto">{state.Title}</h1>
        <h2>
          <span className="font-semibold">Plot: </span> {state.Plot}
        </h2>

        <div className="flex">
          <h2 className="mr-4">
            <span className="font-semibold">Director: </span> {state.Director}
          </h2>
          <h3>
            <span className="font-semibold">Cast: </span> {state.Actors}
          </h3>
        </div>
        <div className="flex">
          <h4 className="mr-4">
            <span className="font-semibold">Genre: </span> {state.Genre}
          </h4>
          <h4>
            <span className="font-semibold">Release Year: </span> {state.Year}
          </h4>
        </div>

        <p>
          <span className="font-semibold">Duration: </span>
          {state.Runtime}
        </p>
        <p>{state.Awards}</p>
        <p>
          <span className="font-semibold">IMDB Rating: </span>
          {state.imdbRating}
        </p>
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
