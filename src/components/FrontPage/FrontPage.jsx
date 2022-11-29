import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies, addMovieFavorite } from "../../actions";
import MovieCard from "../MovieCard/MovieCard";
import SearchMovie from "../SearchMovie/SearchMovie";

export class Buscador extends Component {
  render() {
    return (
      <div className="p-5 my-5">
        <SearchMovie
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mt-4">
          {this.props.movie &&
            this.props.movie.map((movie) => (
              <MovieCard
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
              />
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (title) => dispatch(getMovies(title)),
    addMovieFavorite: (title) => dispatch(addMovieFavorite(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
