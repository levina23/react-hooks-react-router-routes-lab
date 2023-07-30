import React from "react";

function Directors({ directors }) {
  return (
    <div>
      <h1>Directors</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h3>{director.name}</h3>
          <p>Movies: {director.movies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}

export default Directors;
