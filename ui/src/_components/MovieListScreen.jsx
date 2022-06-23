import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import MovieEntry from "./MovieEntry.jsx"

const MovieListScreen = () => {
  const { store } = useContext(GlobalContext);
  const [currentView, setCurrentView] = useState('overview');

  return (
    <div className="movie-data-container">
        <div className="movie-data-header">
          Movie List
        </div>
        <div className="header-button-container">
            <button className="header-button selected" onClick={(e) => {
              store.headerButtonHandler(e.target)
              setCurrentView('overview')
            }}>Overview</button>
            <button className="header-button" onClick={(e) => {
              store.headerButtonHandler(e.target)
              setCurrentView('add')
            }}>Add A Movie</button>
              <button className="header-button" onClick={(e) => {
              store.headerButtonHandler(e.target)
              setCurrentView('overview')
            }}>User Movies</button>
        </div>
        {currentView === 'overview' ?
          <div className="overview-container">
            {store.movieData.map(movie =>
              <MovieEntry movie={movie} />
            )}
          </div> : <></>
        }
        {currentView === 'add' ?
          <div className="add-movie-container">
            <span>Movie Title:</span>
            <input id="movie-title-input" className="add-movie-title-input"/>
            <button onClick={() => {
              let titleInput = document.getElementById("movie-title-input").value

              if (titleInput !== '' && titleInput !== undefined) {
                let movie = {
                  title: document.getElementById("movie-title-input").value
                }

                store.addMovie(movie);
              }
            }}>Submit</button>
          </div> : <></>
        }
      </div>
  )
}

export default MovieListScreen;