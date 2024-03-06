import React, { useState } from "react";
// import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import styles from "./products.module.css";
import { useEffect } from "react";
// for add to cart feat
import { addAsync } from "../cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div className={styles.card}>
      {product.status == "loading" ? (
        <h1>Loading ...</h1>
      ) : (
        product.products.map((product) => {
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
                <button onClick={() => dispatch(addAsync(product))}>
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}
