import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import "../_styled/AddMovie.css"

const AddMovie = () => {
  const { store } = useContext(GlobalContext);

  return (
    <div className="add-movie-container">
      <span>Movie Title:</span>
      <input id="movie-title-input" className="add-movie-title-input" placeholder="Title"/>
      <button className="add-movie-submit" onClick={() => {
        let titleInput = document.getElementById("movie-title-input").value

        if (titleInput !== '' && titleInput !== undefined) {
          let movie = {
            title: document.getElementById("movie-title-input").value
          }
          document.getElementById("movie-title-input").value = "";
          store.addMovie(movie);
        }
      }}>Submit</button>
    </div>
  )
}

export default AddMovie;