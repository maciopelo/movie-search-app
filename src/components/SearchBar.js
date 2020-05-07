import React from "react";

const SearchBar = ({ handleInputChange, currentTitle, search }) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie..."
        className="searchbar"
        onChange={handleInputChange}
        onKeyPress={search}
        value={currentTitle}
      ></input>
    </section>
  );
};

export default SearchBar;
