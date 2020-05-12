import React from "react";
import Post from "./../../widgets/Post";
import store from "./../../store";
import {
  addPost,
  fetchPosts,
  deletePost,
  incDislikes,
  incLikes,
  updatePost,
} from "./../../store/actions/posts";

export default class Posts extends React.Component {
  state = {
    title: "-----",
    description: "",
    posts: [],
    buttonLabel: "Create post",
    currentIndex: null,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ posts: store.getState() });
    });
    store.dispatch(fetchPosts());
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
    store.dispatch(addPost(obj));
  };

  updatePost() {
    const post = {
      title: this.state.title,
      description: this.state.description,
    };
    store.dispatch(updatePost(this.state.currentIndex, post));
  }

  handleButton() {
    if (this.state.buttonLabel.includes("Create")) {
      this.createPost();
    } else {
      this.updatePost();
    }
  }

  incLikes = (index, likes) => {
    store.dispatch(incLikes(index, likes));
  };

  incDisLikes = (index, disLikes) => {
    store.dispatch(incDislikes(index, disLikes));
  };

  delete = (index) => {
    store.dispatch(deletePost(index));
  };

  edit = (index, post) => {
    const { title, description } = post;
    this.setState({
      title,
      description,
      buttonLabel: "Update Post",
      currentIndex: index,
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
                  value={this.state.title}
                  onChange={this.titleHandler.bind(this)}
                  placeholder="title"
                />
              </td>
            </tr>
            <tr>
              <td>
                <textarea
                  value={this.state.description}
                  onChange={this.descHandler.bind(this)}
                  placeholder="Description"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={this.handleButton.bind(this)}>
                  {this.state.buttonLabel}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <ol>
          {this.state.posts.map((post, i) => {
            return (
              <>
                <Post
                  onLike={() => this.incLikes(i, post.likes)}
                  onDisLike={() => this.incDisLikes(i, post.disLikes)}
                  onDelete={() => this.delete(i)}
                  onEdit={() => this.edit(i, post)}
                  tools={["JS", "C++", "C#"]}
                  url={`http://www.google.come`}
                  post={post}
                  key={i}
                />
              </>
            );
          })}
        </ol>
      </>
    );
  }
}
