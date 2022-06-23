import { useState, useEffect, useRef, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from './_context/AppProvider.jsx'
import Navbar from "./_components/Navbar.jsx"
import MovieEntry from "./_components/MovieEntry.jsx"
import UserMovieList from "./_components/UserMovieList.jsx"
import Overview from "./_components/Overview.jsx"
import AddMovie from "./_components/AddMovie.jsx"
import "./App.css";



function App() {
  const { store } = useContext(GlobalContext);
  const [currentView, setCurrentView] = useState('overview');
  const navigate = useNavigate();
  useEffect(() => {
    store.getMovies();
  }, [])

  return (
    <>
    <Navbar />
    <div className="app">
      <div className="movie-data-container">
        <div className="movie-data-header">
          Movie List
        </div>
        <div className="header-button-container">
            <button className="header-button selected" onClick={(e) => {
              store.headerButtonHandler(e.target)
              navigate("/")
            }}>Overview</button>
            <button className="header-button" onClick={(e) => {
              store.headerButtonHandler(e.target)
              navigate("/movies/add")
            }}>Add A Movie</button>
              <button className="header-button" onClick={(e) => {
              store.headerButtonHandler(e.target)
              navigate("/movies/custom")
            }}>User Movies</button>
        </div>
        <Routes>
          <Route path="/" element={<Overview/>} />
          <Route path="/movies/add" element={<AddMovie/>}/>
          <Route path="/movies/custom" element={<UserMovieList/>}/>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
