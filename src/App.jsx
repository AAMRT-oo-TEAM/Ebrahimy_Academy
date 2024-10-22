import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./components/homePage/login/Login";
import Signup from "./components/homePage/login/Signup";
import ForgotPassword from "./components/homePage/login/ForgotPassword";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <div className="scroll-smooth">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
