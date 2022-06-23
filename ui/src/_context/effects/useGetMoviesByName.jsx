const useGetMoviesByName = (setMovieData) => {

  const getMoviesByName = (name) => {
    fetch(`http://localhost:8080/movies?name=${name}`)
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(err => console.log(err))
  }

  return { getMoviesByName };
};

export default useGetMoviesByName;
