// getMovies getMovieDetail addMovieFavorite removeMovieFavorite

export function getMovies(title) {
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
            .then(res_json => res_json.json())
            .then(res => dispatch({ type: 'GET_MOVIES', payload: res.Search }))
    }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
            .then(res => res.json())
            .then(res => dispatch({ type: 'GET_MOVIES_DETAIL', payload: res }))
    }
}

export function addMovieFavorite(title) {
    return {
        type: 'ADD_MOVIE_FAVORITE',
        payload: title
    }
}

export function removeMovieFavorite(id) {
    return {
        type: 'REMOVE_MOVIE_FAVORITE',
        payload: id
    }
}
