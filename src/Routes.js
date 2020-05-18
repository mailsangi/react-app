import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Articles from "./pages/Articles";
import store from "./store/index";
const Random = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        data: {},
        headers: {
          RandomHeader: "shkjdhfjkdshfkjsdhfsk",
        },
      })
      .then((res) => res.data);

  useEffect(() => {
    console.log("State", store.getState());
    const posts_ = store.getState().postsPrime;
    store.subscribe(() => {
      setPosts(store.getState().postsPrime);
    });
    if (posts_.length < 1) {
      getPosts().then((res) => {
        console.log("res", res);
        // setPosts(res);
        store.dispatch({
          type: "ADD_POSTS",
          payload: res,
        });
      });
    } else {
      setPosts(posts_);
    }
  }, []);
  return (
    <div>
      <ol>
        {posts.length > 0
          ? posts.map((el, i) => {
              return (
                <li key={i}>
                  <h1>{el.title}</h1>
                </li>
              );
            })
          : null}
      </ol>
    </div>
  );
};

const Routes = () => {
  return (
    <>
      <Route path="/posts" component={Posts}></Route>
      <Route path="/articles" component={Articles}></Route>
      <Route path="/random" component={Random}></Route>
      <Route exact path="/" component={Home}></Route>
    </>
  );
};
export default Routes;
