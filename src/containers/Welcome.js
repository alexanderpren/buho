import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ButtonAppBar from "../components/ButtonAppBar";
import AlignItemsList from "../components/AlignItemsList";

import {userLogOut,getPosts } from "../actions/Auth";

class Welcome extends React.Component {
  render() {
    return (
      <div className="app-login-container ">
        <ButtonAppBar logOut={this.props.userLogOut} />
        <AlignItemsList getPosts={this.props.getPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, listPosts } = auth;
  return { authUser, listPosts };
};

export default connect(mapStateToProps, {
  userLogOut, getPosts
})(Welcome);
