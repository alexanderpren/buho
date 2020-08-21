import {Route, Switch, withRouter} from 'react-router-dom';

class App extends React.Component {
  
}

    export default withRouter(connect(mapStateToProps, {fetchCatalogs})(App));