
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {
  
}

    export default withRouter(connect(mapStateToProps, {fetchCatalogs})(App));