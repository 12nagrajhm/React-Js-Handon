import React from "react";

const Payment = ({ cart }) => (
  <div>
    <h2>Payment Section</h2>
    <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    <button>Proceed to Payment</button>
  </div>
);

export default Payment;
