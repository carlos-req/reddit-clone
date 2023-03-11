import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./MainPost.css";

const MainPost = () => {
  return (
    <div className="postcards">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default MainPost;
