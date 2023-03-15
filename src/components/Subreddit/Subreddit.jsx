import React from "react";
import "./Subreddit.css";
import {
  changeParam,
  clearPosts,
  fetchPosts,
} from "../../features/Posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const Subreddit = (props) => {
  const { name, img, bc, url } = props;
  const dispatch = useDispatch();
  const param = useSelector((state) => state.posts.param);

  const handleClick = () => {
    dispatch(clearPosts());
    dispatch(changeParam(`/${url}.json`));
    dispatch(fetchPosts(param));
  };

  return (
    <div onClick={handleClick} className="subreddit">
      <img
        className="icon_img"
        style={{ border: `.1rem solid ${bc}` }}
        src={img}
        alt={name + "'s icon img"}
      />
      <h3 className="subreddit-name">{name}</h3>
    </div>
  );
};

export default Subreddit;
