import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, Signin, Register } from "./components";
import { LoginQuery } from "./GraphQL/Queries/login";
import { useQuery } from "@apollo/client";
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";

const Navigation = () => {
  let { loading, error, data } = useQuery(LoginQuery, {
    variables: { email: "23434", password: "3454" },
  });
  console.log("loading", loading);
  console.log("error", error);
  console.log("data", data);

  return (
    <Router>
      <Header />
      <Provider store={store}>
        <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
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
