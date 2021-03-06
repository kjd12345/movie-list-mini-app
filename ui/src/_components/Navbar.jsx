import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../_context/AppProvider.jsx'
import "../_styled/Navbar.css"

const NavBar = () => {
  const { store } = useContext(GlobalContext);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src="./assets/movie-icon-white.png" alt="logo" />
        <span className="navbar-text">Movie List Mini App</span>
      </div>
      <div className="search-container">
        <input className="search-input" placeholder="Search" onChange={(e) => {
          store.searchInput.current = e.target.value
          }}/>
        <img className="search-icon" src="./assets/search-icon-white.png" alt="search-icon" onClick={() => {
          store.getMoviesByName(store.searchInput.current)}}/>
      </div>
    </div>
  )
}

export default NavBar;