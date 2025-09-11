import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Components.jsx/context/CartContext.jsx";
// import { CounterProvider } from "./Components.jsx/context/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <CounterProvider> */}
    <CartProvider>
      <App />
    </CartProvider>
    {/* </CounterProvider> */}
  </StrictMode>
);
