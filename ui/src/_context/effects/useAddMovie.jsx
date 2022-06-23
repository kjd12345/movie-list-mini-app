const useAddMovie = (getMovies) => {

  const addMovie = (movie) => {
    fetch("http://localhost:8080/movies/", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie)
    })
    .then(() => getMovies())
    .catch(err => console.log(err))
  }

  return { addMovie };
};

export default useAddMovie;
