import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React, { Component } from "react";
import SignIn from "./SignIn";
import Welcome from "./Welcome";
import PageError from "./PageError";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authUserId: null,
    };
  }

  render() {
    const { location, authUser, initURL } = this.props;

    if (authUser) {
      if (authUser !== this.state.authUserId) {
        location.pathname = "/";
        this.setState({ authUserId: authUser });
      }
    }
    const userLocalStorage = localStorage.getItem("userId");


    if (location.pathname === "/") {
      if (userLocalStorage === null) {
        return <Redirect to={"/signin"} />;
      } else {
        return <Redirect to={"/welcome"} />;
      }
    }else{
      if(initURL){
        return <Redirect to={initURL} />;
      }
    }

    return (
      <div className="app-main">
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/" component={PageError} />
          <Route component={PageError} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser, initURL } = auth;
  return {
    authUser,initURL
  };
};

export default connect(mapStateToProps, null)(App);
