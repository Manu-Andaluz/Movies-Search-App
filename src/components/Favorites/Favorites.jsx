import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie =>
            <div key={movie.id}>
              <Link to={`/movie/:$${movie.id}`}>{movie.title}</Link>
              <button onClick={() => this.props.removeMovieFavorite(movie.id)}>Remove</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
