import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnlockKeyhole,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { signup, signin } from "../../actions/auth";

const Auth = () => {
  const [issignup, setsignup] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [showconpassword, setconpassword] = useState(false);
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (issignup) {
      dispatch(signup(formdata, navigate));
    } else {
      dispatch(signin(formdata, navigate));
    }
  };
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const swapcase = () => {
    setsignup((prevstate) => !prevstate);
  };
  return (
    <div className="auth-form">
      {!issignup ? (
        <div id="lock-icon">
          <FontAwesomeIcon icon={faUnlockKeyhole} size="3x" />
        </div>
      ) : null}

      <div className="auth-title">
        {issignup ? <p>SignUp Here</p> : <p>SignIn Here</p>}
      </div>
      <form onSubmit={handlesubmit} autoComplete="off">
        {issignup ? (
          <>
            <fieldset>
              <legend>FirstName</legend>
              <input type="text" name="firstname" onChange={handlechange} />
            </fieldset>
            <fieldset>
              <legend>LastName</legend>
              <input type="text" name="lastname" onChange={handlechange} />
            </fieldset>
          </>
        ) : null}
        <fieldset>
          <legend>Email</legend>
          <input type="email" name="email" onChange={handlechange} />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            onChange={handlechange}
          />
          {showpassword ? (
            <FontAwesomeIcon
              icon={faEye}
              id="showpass"
              size="1x"
              onClick={() => {
                setshowpassword((prev) => !prev);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              id="showpass"
              size="1x"
              onClick={() => {
                setshowpassword((prev) => !prev);
              }}
            />
          )}
        </fieldset>
        {issignup ? (
          <fieldset>
            <legend>ConfirmPassword</legend>
            <input
              type={showpassword ? "text" : "password"}
              name="confirmpassword"
              onChange={handlechange}
            />
            {showconpassword ? (
              <FontAwesomeIcon
                icon={faEye}
                id="showpass"
                size="1x"
                onClick={() => {
                  setconpassword((prev) => !prev);
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                id="showpass"
                size="1x"
                onClick={() => {
                  setconpassword((prev) => !prev);
                }}
              />
            )}
          </fieldset>
        ) : null}

        <button type="submit">{issignup ? "SignUp" : "SignIn"}</button>
      </form>

      <div className="switch" onClick={swapcase}>
        {issignup ? (
          <p>Already Have an Account ? Login Here </p>
        ) : (
          <p>Dont't Have an Account ? Signup Here </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
