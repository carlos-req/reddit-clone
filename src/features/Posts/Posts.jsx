import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  //getParam,
  getAllPosts,
  getPostsStatus,
  getPostsErrror,
  fetchPosts,
} from "./postsSlice";
const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const param = useSelector((state) => state.posts.param);
  // const param = useSelector(getParam);
  // console.log(param);
  const postsStatus = useSelector(getPostsStatus);
  // const error = useSelector(getSubredditsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts(param));
    }
  }, [postsStatus, dispatch]);

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

export default Post;
