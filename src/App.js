import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Signin, Register } from "./components";
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";

const Navigation = () => {

  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div style={{width:"800px"}}>
        <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
      </div>
      </Provider>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Navigation;
