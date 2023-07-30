import React from "react";

function Actors({ actors }) {
  return (
    <div>
      <h1>Actors</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>{actor.name}</h3>
          <p>Movies: {actor.movies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Actors;
