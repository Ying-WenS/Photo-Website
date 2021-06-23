import React from "react";
import { Link, Route } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/weather"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
