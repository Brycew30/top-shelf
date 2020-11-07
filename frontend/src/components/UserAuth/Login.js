import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

class Login extends Component {
  state = {
    username: "",
    password: "",
    signUp: false
  }

  validateForm() {
    return this.state.username.length > 2 && this.state.password.length > 2
  }

  handleOnChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(user)
    this.setState({username: "",
    password: "",})
  }

  handleSignUp = event => {
    event.preventDefault();
    this.props.showSignup(this.props.signUp)
  }

  render() {
    return (
      <div className="whiteText">
        <h2>Login</h2>
          <form inline="true" onSubmit={this.handleOnSubmit}>
            <FormGroup controlId="username">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
            </FormGroup>
            <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
            </FormGroup>
            <Button
              variant="success"
              block
              size="large"
              disabled={!this.validateForm()}
              type="submit"
            >Login</Button>
          </form>
          <hr />
            <Button
              onClick={(event) => {this.handleSignUp(event)}}
              variant="info"
              block
              size="small"
              type="submit"
            >Sign Up</Button>
      </div>
    );
  }

}

export default Login;
