import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchposts = () => API.get("/posts");

export const postdata = (post) => API.post("/posts/createpost", post);

export const deletepost = (id) => API.delete(`/posts/${id}`);

export const likepost = (id) => API.post(`/posts/likepost/${id}`);

export const signIn = (formdata) => API.post("/user/signin", formdata);

export const signUp = (formdata) => API.post("/user/signup", formdata);

export const getPost = (id) => API.get(`/posts/getpost/${id}`);
