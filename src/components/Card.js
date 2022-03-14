import React from "react";

function Card(props) {
  {
    console.log(props);
  }
  return <div>{props.movie.original_title}</div>;
}

export default Card;
