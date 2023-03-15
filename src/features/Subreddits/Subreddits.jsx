import React, { useEffect } from "react";
import Subreddit from "../../components/Subreddit/Subreddit";
import "./Subreddits.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllSubreddits, fetchSubreddits } from "./subredditsSlice";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(getAllSubreddits);

  // Making sure Subreddits are only fetched once
  let count = 0;
  useEffect(() => {
    if (count < 1) {
      dispatch(fetchSubreddits());
      count++;
    } else {
      return;
    }
  }, [count, dispatch]);

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
