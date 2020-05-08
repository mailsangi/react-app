import React from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Articles from "./pages/Articles";

const Routes = () => {
  return (
    <>
      <Route path="/posts" component={Posts}></Route>
      <Route path="/articles" component={Articles}></Route>
      <Route path="/random" render={() => <h1> This is random </h1>}></Route>
      <Route exact path="/" component={Home}></Route>
    </>
  );
};
export default Routes;
