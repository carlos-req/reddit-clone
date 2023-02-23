import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input className="input-search" name="search" placeholder="Search" />
      <FaSearch />
    </div>
  );
};

export default SearchBar;
