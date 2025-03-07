import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import Login from "./Components/Login";  
import ProductCatalogue from "./Components/ProductCatalogue";  
import DebounceSearch from "./Components/DebounceSearch"; 
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/products"
            element={
              <PrivateRoute
                element={
                  <>
                    <DebounceSearch onSearch={setSearchQuery} />
                    <ProductCatalogue searchQuery={searchQuery} />
                  </>
                }
              />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
