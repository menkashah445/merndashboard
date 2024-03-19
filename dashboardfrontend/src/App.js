import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/FeedBack";
import FeedBack from "./pages/Services";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword.js";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/" exact element={<About />} />
        <Route path="/" exact element={<Blog />} />
        <Route path="/" exact element={<Services />} />
        <Route path="/" exact element={<FeedBack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
