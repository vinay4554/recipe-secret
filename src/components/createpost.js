import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createpost } from "../actions/post";
import axios from "axios";

const Postform = () => {
  const [formdata, setFormData] = useState({
    title: "",
    items: "",
    process: "",
    tags: "",
  });
  const [selectedfile, setselectedFile] = useState("");
  const location = useLocation();
  const [imageurl, setimageurl] = useState("");
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const dispatch = useDispatch();
  const uploadfile = () => {
    const formdata = new FormData();
    formdata.append("file", selectedfile);
    formdata.append("upload_preset", "bmim1s7m");

    axios
      .post("https://api.cloudinary.com/v1_1/dbwszu6iw/image/upload", formdata)
      .then((response) => setimageurl(response?.data?.secure_url));

    selectedfile("");
    handlesubmit();
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      createpost({ ...formdata, name: user?.user.name, SelectedFile: imageurl })
    );
    setFormData({
      title: "",
      items: "",
      process: "",
      tags: [],
    });
  };

  if (!user?.user.name) {
    return (
      <div className="login-first">
        <h2>Sign Up To create And Like Other Posts </h2>
      </div>
    );
  }
  return (
    <div className="post-form">
      <div className="head-text">
        <h2>Post a recipe</h2>
      </div>
      <form className="form1" encType="multipart/form-data">
        <fieldset>
          <legend>Title</legend>
          <input
            type="text"
            name="title"
            value={formdata.title}
            onChange={(e) =>
              setFormData({ ...formdata, title: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Items</legend>
          <input
            type="text"
            name="items"
            value={formdata.items}
            onChange={(e) =>
              setFormData({ ...formdata, items: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Process</legend>
          <input
            type="text"
            name="process"
            value={formdata.process}
            onChange={(e) =>
              setFormData({ ...formdata, process: e.target.value })
            }
          />
        </fieldset>
        <fieldset>
          <legend>Tags</legend>
          <input
            type="text"
            name="tags"
            value={formdata.tags}
            onChange={(e) =>
              setFormData({ ...formdata, tags: e.target.value.split(",") })
            }
          />
        </fieldset>
      </form>
      <input
        type="file"
        name="file"
        onChange={(e) => setselectedFile(e.target.files[0])}
      />
      <button onClick={uploadfile}>Upload File</button>
      <div style={{ textAlign: "center" }}>
        <button onClick={handlesubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Postform;
