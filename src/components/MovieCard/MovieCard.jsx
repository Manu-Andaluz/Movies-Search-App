import React from "react";
import { useDispatch } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid place-content-center gap-4 py-4 rounded" key={id}>
      <Link to={`/movie/:${id}`} className="text-center grid gap-4">
        <h4>{title}</h4>
        <img
          src={poster}
          className="object-contain h-48 w-96"
          alt="Movie Poster"
        />
      </Link>
      <button
        className="fav"
        onClick={() => dispatch(addMovieFavorite({ title: title, id: id }))}
      >
        ⭐
      </button>
    </div>
  );
};

export default MovieCard;
