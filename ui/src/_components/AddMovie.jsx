import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'

const AddMovie = () => {
  const { store } = useContext(GlobalContext);

  return (
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
    </div>
  )
}

export default AddMovie;