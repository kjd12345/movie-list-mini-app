import { createContext, useRef } from "react";
import useMovieData from "./states/useMovieData.jsx";
import useGetMovies from "./effects/useGetMovies.jsx"
import useGetMoviesByName from "./effects/useGetMoviesByName.jsx";
import useHeaderButtonHandler from "./effects/useHeaderButtonHandler.jsx";
import useAddMovie from "./effects/useAddMovie.jsx"

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const { movieData, setMovieData } = useMovieData();
  const { getMovies } = useGetMovies(setMovieData);
  const { getMoviesByName } = useGetMoviesByName(setMovieData);
  const { addMovie } = useAddMovie(getMovies);
  const { headerButtonHandler } = useHeaderButtonHandler();
  const searchInput = useRef("");

  const store = {
    /* GETTERS */
    movieData,

    /* SETTERS */
    setMovieData,

    /* EFFECTS */
    getMovies,
    getMoviesByName,
    addMovie,
    headerButtonHandler,

    /* REFS */
    searchInput,
  };

  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, AppProvider };
