import logo from './logo.svg';
import './App.css';

function App() {

  let moviesData = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <div className="movie-data-container">
      <h5>Movie Data</h5>
      {moviesData.map(movie =>
        <span>Title: {movie.title}</span>
      )}
    </div>
  );
}

export default App;
