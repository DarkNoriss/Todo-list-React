import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import "./styles/main.scss";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
