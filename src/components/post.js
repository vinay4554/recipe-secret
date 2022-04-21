import React, { useEffect, useState } from "react";
import { removepost, Likepost } from "../actions/post";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const myStyle = {
    backgroundImage: `url(${post?.SelectedFile})`,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="post">
      <div className="back-ground" style={myStyle}>
        <div className="post-header">
          <div className="post-names">
            <h2>{post.name}</h2>
            <h3>{moment(post.createdAt).fromNow()}</h3>
          </div>

          {user?.user && (
            <div className="post-icon">
              <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => navigate(`/postdetail/${post._id}`)}
              />
            </div>
          )}
        </div>
        <div className="post-title">
          <h3>{post.title.toUpperCase()}</h3>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-data">
          <div className="tags">
            <p>{"# " + post.tags}</p>
          </div>
          <div className="items">
            <p>{post.items}</p>
          </div>
          <div className="process">
            <p>{post.process.substring(1, 100) + "...."}</p>
          </div>
        </div>
        <div className="post-actions">
          {user?.user && (
            <div className="likes">
              <FontAwesomeIcon
                className="icon"
                icon={faThumbsUp}
                onClick={() => dispatch(Likepost(post._id))}
              />
              {post.likes.length}
            </div>
          )}

          {user?.user?._id === post?.creator && (
            <div className="delete">
              <FontAwesomeIcon
                className="icon"
                icon={faTrash}
                onClick={() => {
                  dispatch(removepost(post._id));
                }}
              />
              Delete
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
