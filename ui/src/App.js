import { useState, useEffect } from 'react';
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

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="app">
      <div className="movie-data-container">
        <span className="movie-data-header">Movie Data</span>
        {movieData.map(movie =>
          <span className="movie-data-entry">Title: {movie.title}</span>
        )}
      </div>
    </div>
  );
}

export default App;
