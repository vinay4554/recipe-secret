import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Getpost } from "../actions/post";
import { useSelector } from "react-redux";

const Postdetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.sposts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getpost(id));
  }, [dispatch, id]);
  const myStyle = {
    backgroundImage: `url(${posts?.data?.SelectedFile})`,
  };
  return (
    <>
      <div className="post-detail">
        <div className="btn">
          <button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} id="icon" />
            Go back
          </button>
        </div>
        <div className="title" style={myStyle}>
          <h2>{posts?.data?.title}</h2>
        </div>
        <div className="item-detail">
          <div className="tags">
            <h3>Tags</h3>
            <p>
              {posts?.data?.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </p>
          </div>
          <div className="items">
            <h3>Items</h3>
            <p>{posts?.data?.items}</p>
          </div>
          <div className="process">
            <h3>Process</h3>
            <p>{posts?.data?.process}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postdetail;
