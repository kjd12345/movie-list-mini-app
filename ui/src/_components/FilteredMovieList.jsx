import { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { GlobalContext } from '../_context/AppProvider.jsx';
import MovieEntry from "./MovieEntry.jsx";

const FilteredMovieList = (props) => {
  const { store } = useContext(GlobalContext);

  const { search } = useLocation();
  const [searchParams] = useSearchParams();

  let param;
  let value;

  for (const entry of searchParams.entries()) {
    [param, value] = entry;
  }

  // parse boolean data
  value = (value === 'true')

  return (
    <div className="overview-container">
      {store.movieData.filter(movie => movie[param] === value).map(movie =>{
        return <MovieEntry movie={movie} />
      }
      )}
    </div>
  )
}

export default FilteredMovieList;