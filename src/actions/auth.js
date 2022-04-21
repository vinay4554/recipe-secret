import { signIn, signUp } from "../api/post.js";

export const signin = (formdata, navigate) => async (dispatch) => {
  try {
    const { data } = await signIn(formdata);

    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formdata, navigate) => async (dispatch) => {
  try {
    const { data } = await signUp(formdata);
    dispatch({ type: "AUTH", data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
