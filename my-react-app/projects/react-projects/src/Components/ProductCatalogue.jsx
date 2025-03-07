import React, { useState, useEffect } from "react";

const ProductCatalogue = ({ searchQuery }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    { id: 1, name: "Pen", price: "$2" },
    { id: 2, name: "Pencil", price: "$1" },
    { id: 3, name: "Scale", price: "$1" },
    { id: 4, name: "Rubber", price: "$2" },
  ];

  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  return (
    <div>
      <h2>Product Catalogue</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalogue;
