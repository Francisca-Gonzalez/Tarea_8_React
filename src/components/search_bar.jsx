import React from "react";
import { FaSearch } from "react-icons/fa";

import "../stylesheets/search-bar/search_bar.scss";

export const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" color="#B5B5B5"/>
      <input
        placeholder="Type to search..."
      />
    </div>
  )
}

export default SearchBar