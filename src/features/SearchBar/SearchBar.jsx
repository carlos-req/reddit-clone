import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { setSearch } from "../Posts/postsSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    dispatch(setSearch(searchTerm));
  };

  return (
    <div className="searchbar">
      <input
        onChange={(e) => handleChange(e)}
        className="input-search"
        name="search"
        placeholder="Search"
      />
      <FaSearch />
    </div>
  );
};

export default SearchBar;
