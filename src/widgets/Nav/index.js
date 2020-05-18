import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";
export default function Nav() {
  return (
    <ul>
      <li>
        <NavLink exact={true} activeClassName="active" to="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="articles">
          Articles
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="posts">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="random">
          Random
        </NavLink>
      </li>
    </ul>
  );
}
