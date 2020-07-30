import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Signin, Register } from "./components";

const Navigation = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
