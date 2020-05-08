import React from "react";
import Post from "./../../widgets/Post";
export default class Posts extends React.Component {
  state = {
    title: "-----",
    description: "",
    posts: [],
  };
  constructor() {
    super();
  }

  titleHandler(event) {
    this.setState({ title: event.target.value });
  }
  descHandler(event) {
    this.setState({ description: event.target.value });
  }

  createPost = () => {
    const obj = {
      title: this.state.title,
      description: this.state.description,
      likes: 0,
      disLikes: 0,
    };
    this.setState((state) => {
      return {
        posts: [...state.posts, obj],
      };
    });
  };

  incLikes = (index) => {
    const posts = this.state.posts;
    posts[index].likes = posts[index].likes + 1;
    this.setState({
      posts,
    });
  };

  incDisLikes = (index) => {
    const posts = this.state.posts;
    posts[index].disLikes = posts[index].disLikes + 1;
    this.setState({
      posts,
    });
  };

  render() {
    return (
      <>
        <h1>Post title is: {this.state.title}</h1>
        <p>Post Description is: {this.state.description}</p>
        <h1> Create a Post</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  onChange={this.titleHandler.bind(this)}
                  placeholder="title"
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  onChange={this.descHandler.bind(this)}
                  placeholder="Description"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.createPost}>POST</button>
              </td>
            </tr>
          </tbody>
        </table>
        <ol>
          {this.state.posts.map((post, i) => {
            return (
              <Post
                onLike={() => this.incLikes(i)}
                onDisLike={() => this.incDisLikes(i)}
                tools={["JS", "C++", "C#"]}
                url={`http://www.google.come`}
                post={post}
                key={i}
              />
            );
          })}
        </ol>
      </>
    );
  }
}
