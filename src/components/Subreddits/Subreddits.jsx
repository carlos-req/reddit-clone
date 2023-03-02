import React from "react";
import Subreddit from "../Subreddit/Subreddit";
import "./Subreddits.css";

const Subreddits = () => {
  return (
    <div className="subreddits">
      <h2>Subreddits</h2>
      <div className="subreddit-single">
        <Subreddit />
        <Subreddit />
        <Subreddit />
      </div>
    </div>
  );
};

export default Subreddits;
