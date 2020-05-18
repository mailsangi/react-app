import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import { Root } from "./Root/Root";

const root = document.querySelector("body");
const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);
ReactDOM.render(<App />, root);
