import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Nav = () => {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setuser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <div className="nav">
      <div className="app-icon">
        <Link to="/">
          <h1>Secret Recipe</h1>
        </Link>
      </div>
      {user ? (
        <div className="user-details">
          <div className="avatar">{user?.user.name.charAt(0)}</div>
          <div className="username">{user?.user.name}</div>
          <div className="logout-btn">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="login-here">
          <Link to="/auth">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
