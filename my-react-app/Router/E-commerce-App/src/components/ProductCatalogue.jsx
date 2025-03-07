import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./style.css";

const ProductCatalogue = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const username = localStorage.getItem("user"); // Get logged-in username

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$299",
      image:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: "$199",
      image:
        "https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$120",
      image:
        "https://images.pexels.com/photos/375751/pexels-photo-375751.jpeg",
    },
  ];

  return (
    <div className="catalogue-container">
      <h2>Welcome, {username}!</h2> {/* Show logged-in username */}
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>
              {product.name} - {product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalogue;
