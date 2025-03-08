import React, { useState } from "react";
import products from "./data/products";

const Home = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="products">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
