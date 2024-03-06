import React, { useState } from "react";
// import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import styles from "./products.module.css";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  return (
    <div>
      <div className={styles.card}>
        <p>hello</p>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(fetchAsync())}>
          Fetch Products
        </button>
        {products.map((product) => {
          return (
            <div
              className={styles.card}
              key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%" }}
              />
              <h1>{product.title}</h1>
              <p className={styles.price}>${product.price}</p>
              <p>{product.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
