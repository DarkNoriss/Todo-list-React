import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./styles/main.scss";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
