import React, {Component} from "react";
import { connect } from "react-redux";
import ButtonAppBar from "../components/ButtonAppBar";
import AlignItemsList from "../components/AlignItemsList";

import { userLogOut, getPosts } from "../actions/Auth";

class Welcome extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { listPosts, userLogOut } = this.props;
    return (
      <div className="app-login-container ">
        <ButtonAppBar logOut={userLogOut} />
        {listPosts ? (
          <AlignItemsList listPosts={listPosts}     />
        ) : (
          <span>No se encontraron posts.</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, listPosts } = auth;
  return { authUser, listPosts };
};

export default connect(mapStateToProps, {
  userLogOut,
  getPosts,  
})(Welcome);
