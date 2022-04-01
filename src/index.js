import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Header, Home, Products, UseCases, Developers, Pricing, Footer} from "./templates";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/use-cases" element={<UseCases />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
