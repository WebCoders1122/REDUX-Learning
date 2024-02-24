import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore, applyMiddleware, combineReducers } from "redux";
import accountReducer from "./reducers/account.js";
import bonusReducer from "./reducers/bonus.js";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(thunk, logger)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
