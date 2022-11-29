import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="grid place-content-center my-2 text-center">
        <h2 className="text-2xl mb-auto text-white mt-5 ml-5 mb-5">
          Favorite Movies
        </h2>
        <div className="flex flex-wrap justify-center	m-auto gap-8 p-5 text-white">
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <div key={movie.id} className="text-black grid">
                <img src={movie.img} className="w-64" />
                <Link
                  to={`/movie/:${movie.id}`}
                  className="text-sm	mt-5 mx-auto"
                >
                  {movie.title}
                </Link>
                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                  className="max-w-s focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 m-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
