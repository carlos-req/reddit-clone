import React, { useEffect } from "react";
import Subreddit from "../../components/Subreddit/Subreddit";
import "./Subreddits.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllSubreddits,
  getPostsStatus,
  getPostsError,
  fetchSubreddits,
} from "./subredditsSlice";

const Subreddits = () => {
  const dispatch = useDispatch();

  const subreddits = useSelector(getAllSubreddits);
  const srStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (srStatus === "idle") {
      dispatch(fetchSubreddits());
    }
  }, [srStatus, dispatch]);

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
