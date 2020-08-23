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
      acess: false,
    };
  }

  render() {
    const { location, access } = this.props;

    const userLocalStorage = localStorage.getItem("userId");

    if (userLocalStorage) {
      if (userLocalStorage !== this.state.authUserId) {
        this.setState({ authUserId: userLocalStorage, access: true });
        return <Redirect to={"/welcome"} />;
      }
    } else {
      if (access !== this.state.access) {
        this.setState({ authUserId: userLocalStorage, access: false });
        return <Redirect to={"/signin"} />;
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
  const { access } = auth;
  return {
    access,
  };
};

export default connect(mapStateToProps, null)(App);
