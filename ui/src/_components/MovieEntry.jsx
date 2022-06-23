import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import "../_styled/MovieEntry.css"

const MovieEntry = (props) => {
  const { store } = useContext(GlobalContext);
  const [detailed, setDetailed] = useState(false);
  let movie = props.movie;

  const deleteMovie = (movieId) => {
    fetch(`http://localhost:8080/movies/${movieId}`, {
      method: 'DELETE',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  const toggleWatched = (element) => {
    let movieId = element.parentElement.parentElement.parentElement.id;
    fetch(`http://localhost:8080/movies/${movieId}/watched`, {
      method: 'PATCH',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  const toggleToWatch = (element) => {
    let movieId = element.parentElement.parentElement.parentElement.id;
    fetch(`http://localhost:8080/movies/${movieId}/toWatch`, {
      method: 'PATCH',
    })
    .then(() => store.getMovies())
    .catch(err => console.log(err))
  }

  const expandSelection = (element) => {
    if (element.classList.contains('expanded')) {
      element.classList.remove('expanded')
      element.classList.add('contracted')
    } else {
      element.classList.remove('contracted')
      element.classList.add('expanded')
    }
  }

  return (
    <div id={movie.id} key={movie.title} className="movie-entry" onClick={(e)=>{
      expandSelection(e.target.parentElement);
      setDetailed(!detailed);
    }}>
      <div className="movie-entry-header">
        <span className="movie-entry-title">{movie.title}</span>
        <div className="entry-button-container">
        {movie.userAdded === true ?
          <button id={movie.id} className="movie-entry-delete" onClick={(e) => {
            deleteMovie(e.target.id);
          }}
          >Delete</button> : <></>
        }
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
      {detailed === false ? <></> :
        <div className="entry-detail-container">
          Nothing to see here
        </div>
      }
    </div>
  )
}

export default MovieEntry;
