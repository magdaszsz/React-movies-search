import React from "react";

function Card(props) {

  function addToFavorites(id) {
    if(localStorage.getItem('movies') === null) {
      localStorage.setItem('movies', '[]')
    }

    const savedMovies = JSON.parse(localStorage.getItem('movies'))
    if(
      !savedMovies.includes(id)
    ) {

      savedMovies.push(id)
  
      localStorage.setItem('movies', JSON.stringify(savedMovies))
    }
    // console.log(localStorage.getItem('movies'))
  
  }


  return (
    <div className="movie-card">
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
      <button onClick={() => addToFavorites(props.movie.id)}>Add</button>
    </div>
  );
}

export default Card;
