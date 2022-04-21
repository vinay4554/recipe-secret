import React from "react";
import Post from "./post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="posts">
      {posts.length > 0 ? (
        posts.map((post) => <Post post={post} key={post._id} />)
      ) : (
        <div className="load">
          <div className="load-one"></div>
          <div className="load-two"></div>
          <div className="load-three"></div>
        </div>
      )}
    </div>
  );
};

export default Posts;
