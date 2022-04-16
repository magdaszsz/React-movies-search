import React from "react";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

function Card(props) {
  const ctx = useContext(DataContext);


  //function addToFavorites(id) {
  // if (localStorage.getItem("movies") === null) {
  //   localStorage.setItem("movies", "[]");
  // }

  //const savedMovies = JSON.parse(localStorage.getItem("movies"));
  //const savedMovies = props.fav;
  //console.log("savedMovies", savedMovies);
  //if (!savedMovies.includes(id)) {
  //savedMovies.push(id);

  //localStorage.setItem("movies", JSON.stringify(savedMovies));
  //}
  //}

  // function removeMovie(id) {
  //const savedMovies = JSON.parse(localStorage.getItem("movies"));
  //const savedMovies = props.fav;
  //const filteredMovies = savedMovies.filter((movie) => {
  // if (movie !== id) {
  //    return movie;
  //  }
  //});

  //props.setFav(filteredMovies);
  //savedMovies.forEach(el => console.log(typeof(el)))

  // localStorage.setItem('movies', JSON.stringify(filteredMovies))

  // const filteredList = savedMovies(movie => {
  //   if(movie.id !== id) {
  //     return movie
  //   }
  // })

  //console.log(props.fav);
  //}

  return (
    <div
      className={
        ctx.favorited.includes(props.movie.id)
          ? "favorited movie-card"
          : "movie-card"
      }
    >
      <div className="movie-img">
        <img
          alt="movie poster"
          src={
            props.movie.poster_path
              ? `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`
              : "./generic-title.png"
          }
        />
      </div>
      <h2>{props.movie.original_title}</h2>
      <p>{props.movie.vote_average}/10</p>
      <button
        className="add-btn"
        onClick={() => ctx.addToFavorites(props.movie.id)}
      >
        Add
      </button>
      <button
        className="remove-btn"
        onClick={() => ctx.removeFromFavorited(props.movie.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default Card;
