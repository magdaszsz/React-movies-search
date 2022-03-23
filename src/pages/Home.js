import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

function Home(props) {
  const [moviesData, setMoviesData] = useState([]);
  const [numOfMovies, setNumOfMovies] = useState(10);
  const [search, setSearch] = useState(getDayOfWeek());
  const [spinner, setSpinner] = useState(true);
  const [goodToBad, setGoodToBad] = useState(null);

  function getDayOfWeek() {
    const date = new Date().getDay();
    let day = "";
    switch (date) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }
    return day;
  }

  function bestToWorst() {
    setGoodToBad(true);
  }

  function worstToBest() {
    setGoodToBad(false);
  }

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`
      )
      .then((res) => {
        setMoviesData(res.data.results);
        setSpinner(false);
        setGoodToBad(null);
      });
  }, [search]);

  // CODE FOR WHEN I DON'T WANT ANY INITIAL RESULTS

  // const isInitialMount = useRef(true);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`
  //       )
  //       .then((res) => setMoviesData(res.data.results));
  //   }
  // }, [search]);
  return (
    <>
      <Navbar />
      <main>
        <form>
          <input
            type="text"
            placeholder="Enter a movie title"
            id="search-input"
            onChange={(e) => {
              setSearch(e.target.value);
              setNumOfMovies(10);
            }}
          />
          {/* <input type="submit" value="Search" /> */}
        </form>
        <div className="sorting-btns">
          <button id="top" onClick={bestToWorst}>
            <BsArrowUp />
          </button>
          <button id="bottom" onClick={worstToBest}>
            <BsArrowDown />
          </button>
        </div>

        {spinner ? <Loader /> : ""}

        <div>
          <div className="results">
            {!moviesData.length && <p>No results found</p>}
            {moviesData
              .slice(0, numOfMovies)
              .sort((a,b) => {
                if(goodToBad) {
                  return b.vote_average - a.vote_average
                } else if (goodToBad === false){
                  return a.vote_average - b.vote_average
                }
              })
              .map((movie) => (
                <Card key={movie.id}  movie={movie} fav={props.fav} setFav={props.setFav}/>
              ))}
          </div>
          {numOfMovies < moviesData.length && (
            <button className="more-btn" onClick={() => setNumOfMovies((prevNum) => prevNum + 6)}>
              Show More
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
