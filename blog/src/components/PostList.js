import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

//When component gets Mounted, make an action to make an API call
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

//Adding state to props for this component
//By declaring posts: state.posts
//We have declared the posts variable and that variable will now lead to be used within the component
const mapStateToProps = state => {
  return { posts: state.posts };
};

//Here in the connect function, we pass mapStateToProps, then an action and the component so when those
//changes are made in the action, the component listens.
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
