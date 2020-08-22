import React from "react";
import { connect } from "react-redux";
import ButtonAppBar from '../components/ButtonAppBar'

import { userSignIn } from "../actions/Auth";

class Welcome extends React.Component {
  render() {
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
         <ButtonAppBar />
     
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return { authUser };
};

export default connect(mapStateToProps, {
  userSignIn,
})(Welcome);
