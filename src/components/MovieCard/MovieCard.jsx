import React from "react";
import { useDispatch } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="grid place-content-center gap-9 py-5 my-2 rounded "
      key={id}
    >
      <Link to={`/movie/:${id}`} className="text-center grid gap-4">
        <img
          src={poster}
          className="object-contain h-50 w-60 rounded-sm"
          alt="Movie Poster"
        />
      </Link>
      <div className="flex container justify-around">
        <h4 className="mr-2 w-40 text-sm text-white">{title}</h4>

        <button
          className="fav text-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
          onClick={() =>
            dispatch(addMovieFavorite({ title: title, id: id, img: poster }))
          }
        >
          ⭐
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
