import React from "react";
import "./App.css";
import MainPost from "./components/MainPost/MainPost";
import NavBar from "./components/NavBar/NavBar";
import Subreddits from "./components/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="components">
        <div className="MainPost">
          <MainPost />
        </div>
        <div className="Subreddits">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
