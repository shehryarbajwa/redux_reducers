import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //This.props can use the action creator we have and pass it the props value we have defined
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props.user

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}
//Own Props is a copy of the props we are about to send in the component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
