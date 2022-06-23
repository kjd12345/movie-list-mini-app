const useGetMovies = (setMovieData) => {

  const getMovies = () => {
    fetch('http://localhost:8080/movies')
    .then(res => res.json())
    .then(data => setMovieData(data))
    .catch(err => console.log(err))
  }

  return { getMovies };
};

export default useGetMovies;
