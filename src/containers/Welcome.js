import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ButtonAppBar from "../components/ButtonAppBar";
import AlignItemsList from "../components/AlignItemsList";

import { userLogin,userLogOut,getPosts } from "../actions/Auth";

class Welcome extends React.Component {
  render() {
    return (
      <div className="app-login-container ">
        <ButtonAppBar logOut={userLogOut} />
        <AlignItemsList getPosts={getPosts} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, listPosts } = auth;
  return { authUser, listPosts };
};

export default connect(mapStateToProps, {
  userLogin,userLogOut, getPosts
})(Welcome);
