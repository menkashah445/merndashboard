import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
// import ForgetPassword from "./auth/ForgotPassword";
// import ResetPassword from "./auth/ResetPassword";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
