import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import MovieEntry from "./MovieEntry.jsx"

const WatchedMovies = (props) => {
  const { store } = useContext(GlobalContext);

  return (
    <div className="overview-container">
      {store.movieData.filter(movie => movie.default === false).map(movie =>
        <MovieEntry movie={movie} />
      )}
    </div>
  )
}

export default WatchedMovies;