import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    signUp: this.props.signUpState
  }

  validateForm() {
    return this.state.username.length > 2 && this.state.password.length > 2 && this.state.password === this.state.passwordConfirmation
  }

  toParent() {
    this.props.callbackFromParent(this.state.signUp)
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
    this.props.signUpUser(user)
    this.setState({
      username: "",
      password: "",
      passwordConfirmation: "",
    })
  }

  render() {
    return (
      <div className="whiteText">
        <h2>Sign Up</h2>
        <form inline="true" onSubmit={this.handleOnSubmit}>
          <FormGroup controlId="username">
          <FormControl
            autoFocus
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <FormGroup controlId="passwordConfirmation">
            <FormLabel>Password Confirmation</FormLabel>
            <FormControl
              placeholder="Confirm Password"
              type="password"
              value={this.state.passwordConfirmation}
              onChange={this.handleOnChange}
            />
          </FormGroup>
          <Button
            variant="info"
            block
            size="large"
            disabled={!this.validateForm()}
            type="submit"
          >Sign Up</Button>
        </form>
        <hr />
        <Link to="/login">Back to Login</Link>
      </div>
    );
  }

}

export default SignUp;
