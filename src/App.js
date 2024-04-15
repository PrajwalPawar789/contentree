import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BusinessSolutions from "./components/BusinessSolutions";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/Login";
import SignUp from "./components/SignUp";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SellInfo from "./components/SellInfo";
import Terms from "./components/Terms";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BusinessSolutions />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="term" element={<Terms />} />
          <Route path="/sell-info" element={<SellInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
