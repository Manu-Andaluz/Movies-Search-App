import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from "react-router-dom";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="grid place-content-center">
        <h2 className="text-2xl mt-4">Favorite Movies</h2>
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/movie/:$${movie.id}`}>{movie.title}</Link>
                <button
                  onClick={() => this.props.removeMovieFavorite(movie.id)}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 m-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Remove
                </button>
              </div>
            ))}
        </ul>
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
