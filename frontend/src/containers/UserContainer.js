import React, { Component } from 'react';
import Login from '../components/UserAuth/Login';
import SignUp from '../components/UserAuth/SignUp';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import './UserContainer.css';
import { logInThisUser, showSignup, signUpUser } from '../actions/UserActions';

class UserContainer extends Component {

  render() {
    const show = !this.props.signUp ? <Login loginUser={this.props.logInThisUser} showSignup={this.props.showSignup} signUp={this.props.signUp} /> : <SignUp signUpUser={this.props.signUpUser} />
    return (
      <div className="image">
        <Container>
          <Row>
            <Col sm={2} md={3} lg={4}>
            </Col>
            <Col sm={8} md={6} lg={4}>
              {show}
            </Col>
            <Col sm={2} md={3} lg={4}>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    signUp: state.user.signUp,
    books: state.user.books,
    user: state.user.userId
  }
}

export default connect(mapStateToProps, {logInThisUser, signUpUser, showSignup})(UserContainer);
