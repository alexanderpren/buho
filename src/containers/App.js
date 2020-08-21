
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React, { Component } from "react";
import SignIn from "./SignIn";



class App extends Component {
  render() {
    const { location, authUser } = this.props;

    if (location.pathname === "/") {
      if (authUser === null) {
        return <Redirect to={"/signin"} />;
      } else {
        return <Redirect to={"/welcome"} />;
      }
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return {
    authUser,
  };
};

export default connect(mapStateToProps, null)(App);
