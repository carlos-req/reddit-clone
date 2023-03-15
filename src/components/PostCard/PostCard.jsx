import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import "./PostCard.css";
import moment from "moment/moment";

const PostCard = (props) => {
  const { title, user, ups, text, img, numComs, time } = props;

  return (
    <div className="post-card">
      <div className="vote-post">
        <BiUpArrow className="arrows" />
        <p className="rating">{ups}</p>
        <BiDownArrow className="arrows" />
      </div>
      <div className="main-post">
        <h3 className="post-heading">{title}</h3>
        <p>{text}</p>
        <div className="post-img-container">
          <img className="post-img" src={img} alt="" />
        </div>
        <hr className="line" />
        <div className="bottom-post">
          <p className="user">{user}</p>
          <p>{moment.unix(time).fromNow()}</p>
          <div className="comments-count">
            <FaRegCommentAlt />
            <p>{numComs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
