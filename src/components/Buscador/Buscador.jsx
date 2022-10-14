import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addMovieFavorite } from "../../actions";
import "./Buscador.css";

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
      <div className="container-form">
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movie &&
            this.props.movie.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movie/:${movie.imdbID}`} className="link-movie">
                  {movie.Title}
                </Link>
                <button
                  className="fav"
                  onClick={() =>
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID,
                    })
                  }
                >
                  ⭐
                </button>
              </li>
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
