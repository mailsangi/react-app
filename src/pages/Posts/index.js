import React from "react";
import { connect } from "react-redux";
import Post from "./../../widgets/Post";
import {
  addPost,
  deletePost,
  incDislikes,
  incLikes,
  updatePost,
} from "./../../store/actions/posts";

class Posts extends React.Component {
  state = {
    title: "-----",
    description: "",
    posts: [],
    buttonLabel: "Create post",
    currentIndex: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("PROPS", this.props);
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
    this.props.addPost(obj);
  };

  updatePost() {
    const post = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.updatePost(this.state.currentIndex, post);
  }

  handleButton() {
    if (this.state.buttonLabel.includes("Create")) {
      this.createPost();
    } else {
      this.updatePost();
    }
  }

  incLikes = (index, likes) => {
    this.props.incLikes(index, likes);
  };

  incDisLikes = (index, disLikes) => {
    this.props.incDisLikes(index, disLikes);
  };

  delete = (index) => {
    this.props.deletePost(index);
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
          {this.props.posts.map((post, i) => {
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    dhjskhd: state.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (payload) => {
      dispatch(addPost(payload));
    },
    updatePost: (index, post) => {
      dispatch(updatePost(index, post));
    },
    incLikes: (index, likes) => {
      dispatch(incLikes(index, likes));
    },
    incDisLikes: (index, disLikes) => {
      dispatch(incDislikes(index, disLikes));
    },
    deletePost: (index) => {
      dispatch(deletePost(index));
    },
  };
};

const ActualComponent = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default ActualComponent;
