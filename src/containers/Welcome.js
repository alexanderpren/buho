import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ButtonAppBar from "../components/ButtonAppBar";
import Posts from "../components/Posts";

import { userSignIn, userSignOut,getPosts } from "../actions/Auth";

class Welcome extends React.Component {
  render() {
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <ButtonAppBar singOut={userSignOut} />
        <Posts getPosts={getPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, listPosts } = auth;
  return { authUser, listPosts };
};

export default connect(mapStateToProps, {
  userSignIn, userSignOut, getPosts
})(Welcome);
