import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import "../_styled/MovieEntry.css"

const MovieEntry = (props) => {
  const { store } = useContext(GlobalContext)
  let movie = props.movie;

  const deleteMovie = (movieId) => {
    fetch(`http://localhost:8080/movies/${movieId}`, {
      method: 'DELETE',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  const toggleWatched = (element) => {
    let movieId = element.parentElement.id;
    fetch(`http://localhost:8080/movies/${movieId}/watched`, {
      method: 'PATCH',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  const toggleToWatch = (element) => {
    let movieId = element.parentElement.id;
    fetch(`http://localhost:8080/movies/${movieId}/toWatch`, {
      method: 'PATCH',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  return (
    <div id={movie.id} key={movie.title} className="movie-entry">
      <span className="movie-entry-title">{movie.title}</span>
      {movie.default === false ?
        <button id={movie.id} className="movie-entry-delete" onClick={(e) => {
          deleteMovie(e.target.id);
        }}
        >Delete</button> : <></>
      }
      <div className="entry-button-container">
        {movie.watched === true ?
          <button className="watched-button" onClick={(e) => toggleWatched(e.target)}>Watched</button>
          :
          <button className="not-watched-button"  onClick={(e) => toggleWatched(e.target)}>Not Watched</button>
        }
        {movie.toWatch === true ?
          <button className="on-watchlist-button" onClick={(e) => toggleToWatch(e.target)}>On Watchlist</button>
          :
          <button className="add-watchlist-button"  onClick={(e) => toggleToWatch(e.target)}>Add to Watchlist</button>
        }
      </div>
    </div>
  )
}

export default MovieEntry;

{/* <table id={movie.id} className="movie-entry">
      <thead>
        <tr>
          <td className="movie-data-title">{movie.title}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Release Date
          </td>
          <td>
            Genre
          </td>
          <td>
            Director
          </td>
          <td>
            Stars
          </td>
        </tr>
        <tr>
          <td>
            N/A
          </td>
          <td>
            N/A
          </td>
          <td>
            N/A
          </td>
          <td>
            N/A
          </td>
        </tr>
      </tbody>
      {/* <span key={movie.title} className="movie-data-title">{movie.title}</span> */}

    // </table> */}