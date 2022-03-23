import React from "react";

function Card(props) {
  //console.log(props)

  function addToFavorites(id) {
    // if (localStorage.getItem("movies") === null) {
    //   localStorage.setItem("movies", "[]");
    // }

    //const savedMovies = JSON.parse(localStorage.getItem("movies"));
    const savedMovies = props.fav
    console.log(savedMovies)
    if (!savedMovies.includes(id)) {
      savedMovies.push(id);

      localStorage.setItem("movies", JSON.stringify(savedMovies));
     
    }
    
  }

  return (
    <div
      className={
        props.fav.includes(props.movie.id)
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
        onClick={() => {
          addToFavorites(props.movie.id);
          console.log(props.fav)
          props.setFav([...props.fav]);
          
        }}
      >
        Add
      </button>
      <button className="remove-btn" >
        Remove
      </button>
    </div>
  );
}

export default Card;
