import React, { useState, useEffect } from "react";
import Post from "../../widgets/Post";

import store from "./../../store/index";

export default function Articles() {
  const [post, setPost] = useState({});
  const [articles, setArticles] = useState([]);
  const [changed, setChanged] = useState([]);

  useEffect(() => {
    console.log("Useeffect is being called.", store.getState());
    store.subscribe(() => {
      setArticles(store.getState().articles);
    });
    store.dispatch({ type: "GET_ARTICLES" });
    setChanged(!!!changed);
  }, []);
  function titleHandler(event) {
    const obj = {
      ...post,
      title: event.target.value,
    };
    setPost(obj);
  }

  function descHandler(event) {
    const obj = {
      ...post,
      description: event.target.value,
    };
    setPost(obj);
  }

  const createPost = () => {
    const obj = { ...post, likes: 0, disLikes: 0 };
    store.dispatch({ type: "ADD_ARTICLE", payload: obj });
  };
  const incLikes = (index) => {
    const posts_ = [...articles];
    posts_[index].likes++;
    setArticles(posts_);
  };
  const disLikes = (index) => {
    const posts_ = [...articles];
    posts_[index].disLikes++;
    setArticles(posts_);
  };
  return (
    <div>
      <h1>{post.title}</h1>
      <p> {post.description}</p>
      <table>
        <tbody>
          <tr>
            <td>
              <input onChange={titleHandler} placeholder="title" />
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                onChange={descHandler}
                placeholder="Description"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={createPost}>POST</button>
            </td>
          </tr>
        </tbody>
      </table>
      <ol>
        {articles.map((post, index) => (
          <Post
            key={index}
            onDisLike={() => disLikes(index)}
            onLike={() => incLikes(index)}
            post={post}
          />
        ))}
      </ol>
    </div>
  );
}
