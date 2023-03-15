import React, { useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts, fetchPosts, getPostsStatus } from "./postsSlice";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getAllPosts);
  const param = useSelector((state) => state.posts.param);
  const postsStatus = useSelector(getPostsStatus);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts(param));
    }
  }, [param, dispatch, postsStatus]);

  return (
    <div className="postcards">
      {posts.map((post, index) => (
        <PostCard
          time={post.data.created_utc}
          title={post.data.title}
          user={post.data.author}
          key={index}
          ups={post.data.ups}
          text={post.data.selftext}
          numComs={post.data.num_comments}
          img={post.data.url}
        />
      ))}
    </div>
  );
};

export default Post;
