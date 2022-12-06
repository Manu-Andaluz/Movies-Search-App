import React from "react";
import { useDispatch } from "react-redux";
import { addMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, poster }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid place-content-center py-5" key={id}>
      <Link
        to={`/movie/:${id}`}
        className="text-center grid gap-4 mb-2 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out"
      >
        <img
          src={poster}
          className="object-contain h-80 w-full rounded"
          alt="Movie Poster"
        />
      </Link>
      <div className="flex container justify-center items-cent py-5 rounded-b">
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
