import React, { useEffect } from "react";
import Posts from "./posts";
import Postform from "./createpost";
import { useDispatch } from "react-redux";
import { getposts } from "../actions/post";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getposts());
  }, [dispatch]);
  return (
    <>
      <div className="posts-section">
        <Posts />
        <Postform />
      </div>
    </>
  );
};

export default Home;
