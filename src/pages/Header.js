import React from "react";
import classes from "../App.css";

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-list">
        Blog
      </a>
      <a href="/contact" className="header-list">
        お問い合わせ
      </a>
    </header>
  );
};
