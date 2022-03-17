import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const movies = []

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY; 


    if (localStorage.getItem("movies") === null) {
      localStorage.setItem("movies", "[]");
    }

    const savedMovies = JSON.parse(localStorage.getItem("movies"));
   
    for (let i = 0; i < savedMovies.length; i++) {
      axios.get(
        `https://api.themoviedb.org/3/movie/${savedMovies[i]}?api_key=${key}&language=en-US`
      )
      .then(res => {
        movies.push(res.data)
      setFavoriteMovies([...movies])});
     
       }
      }, []);
      
      
  return (
    <>
      <Navbar />
      <main>
        <div className="favorites-container">
          {favoriteMovies.map(movie => {
            return <Card movie={movie}/>
          })}
        </div>
      </main>
    </>
  );
}

export default Favorites;
