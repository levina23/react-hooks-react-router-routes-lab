import React from "react";

function Movies({ movies }) {
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time} minutes</p>
          <p>Genres: {movie.genres.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
