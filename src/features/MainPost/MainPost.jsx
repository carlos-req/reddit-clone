import React from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./MainPost.css";
import { useSelector, useDispatch } from "react-redux";

const MainPost = () => {
  // const initialPosts = useSelector();
  // const dispatch = useDispatch();

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
