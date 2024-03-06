import React from "react";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import "./App.css";
import { useState } from "react";

function App() {
  //to show and hide cart
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <div className='App'>
      <button onClick={() => setCartDisplay(!cartDisplay)}>
        {cartDisplay ? "Hide" : "Show"} Cart
      </button>
      {cartDisplay ? <Cart></Cart> : <Products></Products>}
    </div>
  );
}

export default App;
