import { combineReducers } from "redux";
import postreducer from "./post.js";
import authReducer from "./auth.js";
import spostReducer from "./singlepost.js";

export const rootreducers = combineReducers({
  posts: postreducer,
  auth: authReducer,
  sposts: spostReducer,
});
