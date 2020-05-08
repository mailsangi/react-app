import React, { useState } from "react";
import Post from "../../widgets/Post";

export default function Articles() {
  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);
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
    const posts_ = [...posts, obj];
    setPosts(posts_);
  };
  const incLikes = (index) => {
    const posts_ = [...posts];
    posts_[index].likes++;
    setPosts(posts_);
  };
  const disLikes = (index) => {
    const posts_ = [...posts];
    posts_[index].disLikes++;
    setPosts(posts_);
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
        {posts.map((post, index) => (
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
