import React from "react";
export default class Post extends React.Component {
  state = {
    post: {},
  };
  constructor(props) {
    super();
    console.log("Props in Post", props);
  }

  componentWillMount() {
    console.log("CWM");
  }
  componentDidMount() {
    this.setState((x, y) => {
      console.log("Cool", x, y);
      return {
        post: this.props.post,
      };
    });
    console.log("CDM");
  }

  componentDidUpdate() {
    console.log("CDU");
  }

  componentWillUpdate() {
    console.log("CWU");
  }

  //   incLikes = () => {
  //     const post = this.state.post;
  //     post.likes = post.likes + 1;
  //     this.setState({
  //       post,
  //     });
  //   };
  //   incDisLikes = () => {
  //     const post = this.state.post;
  //     post.disLikes = post.disLikes + 1;
  //     this.setState({
  //       post,
  //     });
  //   };

  render() {
    console.log("RENDER");
    const { title, description, likes, disLikes } = this.state.post;
    return (
      <li>
        <h1>Title is: {title}</h1>
        <p> desc is: {description}</p>
        <button onClick={this.props.onLike}>Likes {likes}</button>
        <button onClick={this.props.onDisLike}>Dislikes {disLikes}</button>
      </li>
    );
  }
}
