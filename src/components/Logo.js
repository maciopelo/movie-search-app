import React from "react";

const Logo = ({ handleClearPage }) => {
  return (
    <header onClick={handleClearPage}>
      <h1>Movie Database</h1>
    </header>
  );
};

export default Logo;
