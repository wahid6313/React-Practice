import React, { useContext } from "react";

import { CartContext } from "./context/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);

  const totalBill = cart.items.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );
  return (
    <div className="flex flex-col items-center justify-center w-xl mt-2 shadow-lg p-5 bg-gray-300 rounded-lg">
      <h1 className="font-bold text-3xl mb-5">Cart</h1>
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - $ {item.price}
          </li>
        ))}
      <h5 className="font-semibold text-xl mt-5">
        Total Bill : $ {totalBill}{" "}
      </h5>
    </div>
  );
};

export default Cart;
