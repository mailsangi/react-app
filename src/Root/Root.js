import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./Root.css";
import Nav from "../widgets/Nav";
import Routes from "./../Routes";

export class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <header>
            <Nav />
          </header>
          <main>
            <Routes />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}
