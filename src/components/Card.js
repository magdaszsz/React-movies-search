import React from "react";

function Card(props) {
 
  return (
    <div className="movie-card">
      <h2>{props.movie.original_title}</h2>
      <img alt="movie poster" src={props.movie.poster_path ? `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}` : './generic-title.png'}/>
      <p>
        {props.movie.vote_average}
      </p>
    </div>
  );
}

export default Card;
