import React from "react";
import { FavoriteMoviesContext } from "../contexts/FavoriteMoviesContext";
import { useContext } from "react";

function Card(props) {
  const ctx = useContext(FavoriteMoviesContext);

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
