import React, { useState } from "react";
// import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync, deleteAsync } from "./cartSlice";
import styles from "./Cart.module.css";
import { useEffect } from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const status = useSelector((state) => state.cart.status);

  //fetching cart items
  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div>
      {status == "loading" ? (
        <h1>Loading ...</h1>
      ) : (
        items.map((item) => {
          return (
            <div
              className={styles.cartItem}
              key={item.id}>
              <img
                className={styles.imgFluid}
                src={item.thumbnail}
                alt={item.title}
              />
              <div className={styles.description}>
                <p>{item.title}</p>
                <span>{item.brand}</span>
                <strong>${item.price * item.quantity}</strong>
              </div>
              <div className={styles.quantity}>
                Quantity
                <select
                  value={item.quantity}
                  // onChange={(e) => handleChange(e, item.id)}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className={styles.close}>
                <button onClick={() => dispatch(deleteAsync(item.id))}>
                  X
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
