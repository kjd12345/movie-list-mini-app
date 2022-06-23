import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'

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

  return (
    <div key={movie.title} className="movie-entry">
      <span className="movie-data-title">{movie.title}</span>
      {movie.default === false ?
        <button id={movie.id} className="movie-entry-delete" onClick={(e) => {
          deleteMovie(e.target.id);
        }}
        >Delete</button> : <></>
      }
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