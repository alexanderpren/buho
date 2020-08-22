
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
      authUser: null,
    };
  }


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
  const { authUser } = auth;
  return {
    authUser,
  };
};

export default connect(mapStateToProps, null)(App);
