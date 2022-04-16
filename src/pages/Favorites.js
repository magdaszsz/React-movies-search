import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../components/Card";
import { DataContext } from "../contexts/DataContext";
//import { DataContext } from "../contexts/DataContext";

function Favorites(props) {
  const ctx = useContext(DataContext)
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  //console.log(ctx)


  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    
const savedMovies = ctx.favorited;

    for (let i = 0; i < savedMovies.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${savedMovies[i]}?api_key=${key}&language=en-US`
        )
        .then((res) => {

          setFavoriteMovies((prev) => [...prev, res.data]);
         
        });
    }
  
  }, [ctx.favorited]);

 

  return (
    <>
      <Navbar />
      <main>
        <div className="favorites-container">
          {favoriteMovies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Favorites;
