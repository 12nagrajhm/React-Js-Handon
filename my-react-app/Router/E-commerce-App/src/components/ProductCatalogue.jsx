import React from "react";
import "./style.css";

const ProductCatalogue = () => {
  const products = [
    { id: 1, name: "Laptop", price: "$299", image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, name: "Smartphone", price: "$199", image: "https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, name: "Headphones", price: "$120", image: "https://images.pexels.com/photos/375751/pexels-photo-375751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
  ];

  return (
    <div className="catalogue-container">
      <h2>Product Catalogue</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.name} - {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalogue;
