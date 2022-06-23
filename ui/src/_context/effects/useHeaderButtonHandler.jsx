const useHeaderButtonHandler = (setMovieData) => {
  // const [movieData, setMovieDataArray] = useState([]);

  const headerButtonHandler = (target) => {
    let elements = document.getElementsByClassName("header-button");

    for (let element of elements) {
      element.classList.remove("selected");
    }

    target.classList.add("selected");
  }

  return { headerButtonHandler };
};

export default useHeaderButtonHandler;
