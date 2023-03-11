import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import "./PostCard.css";
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="vote-post">
        <BiUpArrow className="arrows" />
        <p className="rating">62.9k</p>
        <BiDownArrow className="arrows" />
      </div>
      <div className="main-post">
        <h3 className="post-heading">This will be the heading of the post</h3>
        <img atl="Hello"></img>
        <hr className="line" />
        <div className="bottom-post">
          <p className="user">flyingcatwithhorns</p>
          <p>10 hours ago</p>
          <div className="comments-count">
            <FaRegCommentAlt />
            <p>5.8k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
