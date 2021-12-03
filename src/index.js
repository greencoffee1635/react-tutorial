import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const mystore = createStore(
  allReducer,
  // [redux-devtools-extension](With Redux/Basic store)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
