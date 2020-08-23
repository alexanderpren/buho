import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { userLogin } from "../actions/Auth";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.enterKey = this.enterKey.bind(this);
  }



  enterKey(event) {
    if (this.state.username !== "" && this.state.password !== "") {
      if (event.keyCode === 13) {
        const { username, password } = this.state;
        event.preventDefault();
        this.props.userLogin({ username, password });
      }
    }
  }

  render() {
    const { username, password } = this.state;
    
    return (
      <div className="app-login-container ">
        <div className="app-login-main-content">
        

          <div className="col-md-4 col-md-offset-4">
            <div className="app-login-header mb-4">
              <h1>Login</h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label="Usuario"
                    fullWidth
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                    defaultValue={username}
                    margin="normal"
                    className="mt-1 my-sm-3"
                    variant="outlined"
                  />
                  <TextField
                    type="password"
                    label="Password"
                    fullWidth
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                    onKeyUp={this.enterKey}
                    variant="outlined"
                  />

                  <div>
                    <Button
                      fullWidth
                      disableElevation
                      onClick={() => {
                        this.props.userLogin({ username, password });
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Iniciar sesión
                    </Button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { authUser } = auth;
  return {  authUser };
};

export default connect(mapStateToProps, {
  userLogin
})(SignIn);
