import { useState } from "react";

const useMovieData = () => {
  const [movieData, setMovieDataArray] = useState([]);

  const setMovieData = (newState) => {
    setMovieDataArray(newState);
  };

  return { movieData, setMovieData };
};

export default useMovieData;
