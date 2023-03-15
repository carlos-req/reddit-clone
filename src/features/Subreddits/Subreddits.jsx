import React, { useEffect } from "react";
import Subreddit from "../../components/Subreddit/Subreddit";
import "./Subreddits.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllSubreddits,
  getSubredditsStatus,
  //getSubredditsError,
  fetchSubreddits,
} from "./subredditsSlice";

const Subreddits = () => {
  const dispatch = useDispatch();

  const subreddits = useSelector(getAllSubreddits);
  const srStatus = useSelector(getSubredditsStatus);
  // const error = useSelector(getSubredditsError);
  console.log(subreddits);

  useEffect(() => {
    if (srStatus === "idle") {
      dispatch(fetchSubreddits());
    }
  }, [srStatus, dispatch]);

  const defaultimg =
    "https://b.thumbs.redditmedia.com/rwN0al9P6nYhGSQO-yIJb-FyF5xg-c2v61zjMom4c4E.png";

  return (
    <div className="subreddits">
      <h2>Subreddits</h2>
      <div className="subreddit-single">
        {subreddits.map((subreddit, index) => (
          <Subreddit
            url={subreddit.display_name_prefixed}
            name={subreddit.display_name}
            key={index}
            img={subreddit.icon_img ? subreddit.icon_img : defaultimg}
            bc={subreddit.primary_color ? subreddit.primary_color : "#46d160"}
          />
        ))}
      </div>
    </div>
  );
};

export default Subreddits;
