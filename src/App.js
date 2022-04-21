import React from "react";
import Home from "./components/Home";
import Nav from "./components/nav";
import "./styles/App.scss";
import Auth from "./components/auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Postdetail from "./components/Postdetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/postdetail/:id" exact element={<Postdetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
