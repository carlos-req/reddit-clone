import React from "react";
import { FaReddit } from "react-icons/fa";
import SearchBar from "../../features/SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <div className="nav-logo">
          <FaReddit className="reddit-logo" />
          <p className="whole-logo">
            <span className="logo">Reddit</span>Minimal
          </p>
        </div>
        <div className="search-component">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
