import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Items = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="flex flex-col items-center justify-center w-xl mt-2 shadow-lg p-5 bg-white rounded-lg">
      <h1>{props.name}</h1>
      <p>Price: $ {props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
        className=" bg-gray-200 px-3 py-1.5 rounded-lg mt-2 ml-2 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Items;
