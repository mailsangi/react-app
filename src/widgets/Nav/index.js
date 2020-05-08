import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
export default function Nav() {
  return (
    <ul>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="articles">Articles</Link>
      </li>
      <li>
        <Link to="posts">Posts</Link>
      </li>
    </ul>
  );
}
