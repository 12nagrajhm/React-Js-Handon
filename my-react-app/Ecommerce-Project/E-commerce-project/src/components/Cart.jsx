import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <Link to="/payment">
        <button>Proceed to Payment</button>
      </Link>
    </div>
  );
};

export default Cart;
