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
    console.log("This props CWM", this.props.post);
  }
  componentDidMount() {
    console.log("This props CDM", this.props.post);
    this.setState((x, y) => {
      console.log("Cool", x, y);
      return {
        post: this.props.post,
      };
    });
  }

  componentDidUpdate() {}

  componentWillUpdate() {}

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
    const { title, description, likes, disLikes } = this.props.post;
    console.log("render**", likes);
    return (
      <li>
        <h1>Title is: {title}</h1>
        <p> desc is: {description}</p>
        <button onClick={this.props.onLike}>Likes {likes}</button>
        <button onClick={this.props.onDisLike}>Dislikes {disLikes}</button>
        <button onClick={this.props.onDelete}>X</button>
        <button onClick={this.props.onEdit}>Edit</button>
      </li>
    );
  }
}
