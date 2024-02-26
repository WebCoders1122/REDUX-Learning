import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import accountReducer from "./slices/accountSlice.jsx";
import bonusReducer from "./slices/bonusSlice.jsx";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
