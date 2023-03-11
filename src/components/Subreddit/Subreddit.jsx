import React from "react";
import "./Subreddit.css";
const Subreddit = (props) => {
  const { name, img, bc } = props;

  return (
    <div className="subreddit">
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
