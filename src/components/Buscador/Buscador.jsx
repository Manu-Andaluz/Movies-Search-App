import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies, addMovieFavorite } from "../../actions";
import MovieCard from "../MovieCard/MovieCard";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="p-5">
        <form
          className="flex items-center"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Movie..."
            className="mr-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />
          <button
            type="submit"
            className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            SEARCH
          </button>
        </form>
        <ul className="grid grid-cols-4 place-content-center gap-4 mt-5">
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
