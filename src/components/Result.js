import React from "react";

const Result = ({ result, handleModal }) => {
  return (
    <div className="result" onClick={() => handleModal(result.imdbID)}>
      <img src={result.Poster} alt={result.Title} />
      <h3>{result.Title}</h3>
    </div>
  );
};

export default Result;
