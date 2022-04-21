import { fetchposts, deletepost, likepost } from "../api/post";
import { postdata } from "../api/post";
import { getPost } from "../api/post";
// creating the action Creators

export const getposts = () => async (dispatch) => {
  try {
    const { data } = await fetchposts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const createpost = (post) => async (dispatch) => {
  try {
    const { data } = await postdata(post);
    console.log("obtained data", data);
    dispatch({
      type: "CREATE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removepost = (id) => async (dispatch) => {
  try {
    await deletepost(id);

    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const Likepost = (id) => async (dispatch) => {
  try {
    const { data } = await likepost(id);
    dispatch({ type: "LIKE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const Getpost = (id) => async (dispatch) => {
  try {
    const post = await getPost(id);
    dispatch({ type: "GET_POST", payload: post });
  } catch (error) {
    console.log(error);
  }
};
