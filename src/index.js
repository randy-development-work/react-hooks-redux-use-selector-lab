import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import usersReducer from "./features/users/usersSlice";

// add imports and code
const store = configureStore({
  reducer: usersReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
