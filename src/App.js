import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Auth/LandingPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Search from "./pages/Private/Search";
import ThreeDays from "./pages/Private/ThreeDays";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SevenDays from "./pages/Private/SevenDays";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="threeDays" element={<ThreeDays />} />
        <Route path="sevenDays" element={<SevenDays />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
