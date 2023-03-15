import React from "react";
import "./Subreddit.css";
import { changeParam } from "../../features/Posts/postsSlice";
import { useDispatch } from "react-redux";

const Subreddit = (props) => {
  const { name, img, bc, url } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeParam(`/${url}.json`));
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
