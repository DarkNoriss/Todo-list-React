import React from "react";
import { PATHICONS } from "../constants";
import "../styles/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer-link" href="https://github.com/DarkNoriss" target="__blank">
        <img src={`${PATHICONS}github.svg`}></img>
        <p>DarkNoriss</p>
      </a>
    </footer>
  );
};
