import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {

  // let moviesData = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];

  const [movieData, setMovieData] = useState([]);
  const searchInput = useRef("")

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log(err))
  }, [])

  const getMoviesByName = (name) => [
    fetch(`http://localhost:8080/movies?name=${name}`)
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log(err))
  ]

  return (
    <div className="app">
      <div className="navbar">
        <span className="navbar-text">Come get some of those movies</span>
        <div className="search-container">
          <input className="search-input" placeholder="Search" onChange={(e) => {
            searchInput.current = e.target.value
            // getMoviesByName(searchInput.current)
            }}/>
          <img className="search-icon" src="./assets/search-icon-white.png" alt="search-icon" onClick={() => {
            getMoviesByName(searchInput.current)}}/>
        </div>
      </div>
      <div className="movie-data-container">
        <span className="movie-data-header">Movies</span>
        {movieData.map(movie =>
          <span key={movie.title} className="movie-data-entry">Title: {movie.title}</span>
        )}
      </div>
    </div>
  );
}

export default App;
