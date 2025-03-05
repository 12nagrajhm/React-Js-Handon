import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProductCatalogue from "./components/ProductCatalogue";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
};

export default App;
