import React from "react";
import { GoSearch } from "react-icons/go";
function Search() {
  return (
    <>
      <div className="searchBox">
        <input type="text" name="searchInput" id="searchInput" />
        <GoSearch className="searchIcon" />
      </div>
    </>
  );
}

export default Search;
