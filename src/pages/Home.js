import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Card from '../components/Card'
import {useState, useEffect} from 'react'

function Home() {
   const [moviesData, setMoviesData] = useState([]);
   const [numOfMovies, setNumOfMovies] = useState(10);
   const [search, setSearch] = useState(getDayOfWeek());
  
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

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}`
      )
      .then((res) => setMoviesData(res.data.results));
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
            <input type="submit" value="Search" />
          </form>

         
      
        <div className="result">
          {moviesData
            .slice(0, numOfMovies)
            .map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
        </div>
        {numOfMovies < moviesData.length && (
          <button onClick={() => setNumOfMovies((prevNum) => prevNum + 6)}>
            Show More
          </button>
        )}
    </>
  );
}

export default Home