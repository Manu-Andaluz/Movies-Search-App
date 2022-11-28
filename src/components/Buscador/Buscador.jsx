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
    this.props.getMovies("avengers"); //
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.state.title = "";
  }

  render() {
    const { title } = this.state;
    return (
      <div className="p-5 my-5">
        <form
          className="flex items-center justify-center"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Search Movie..."
            className="bg-gray-100 text-sm focus:ring-blue-500 focus:border-blue-500 block sm:w-96 2xl:w-3/5 px-8 py-2.5 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit" className="bg-gray-100 text-sm px-8 py-2.5">
            <svg
              class="w-4 h-5 text-gray-900"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
        </form>
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
