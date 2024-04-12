import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BusinessSolutions from "./components/BusinessSolutions";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/Login";
import SignUp from "./components/SignUp";


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
        </Routes>
       
      </Router>          

    </div>
  );
}

export default App;
