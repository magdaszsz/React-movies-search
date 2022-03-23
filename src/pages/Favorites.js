import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Favorites(props) {
  const [favoriteMovies, setFavoriteMovies] = useState([])
  //console.log(props.fav)
  //const movies = []

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY; 

    // if (localStorage.getItem("movies") === null) {
    //   localStorage.setItem("movies", "[]");
    // }

    //const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    const savedMovies = props.fav
   
    for (let i = 0; i < savedMovies.length; i++) {
      axios.get(
        `https://api.themoviedb.org/3/movie/${savedMovies[i]}?api_key=${key}&language=en-US`
      )
      .then(res => {
        //movies.push(res.data)
        setFavoriteMovies((prev) => [...prev, res.data])
        
      //setFavoriteMovies([...movies])
    });
    }
   
      }, []);
      
      
  return (
    <>
      <Navbar />
      <main>
        <div className="favorites-container">
          {favoriteMovies.map(movie => {
            return <Card key={movie.id} movie={movie} fav={props.fav}/>
          })}
        </div>
      </main>
    </>
  );
}

export default Favorites;
