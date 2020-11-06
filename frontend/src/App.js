import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import UserContainer from './containers/UserContainer';
import { connect } from 'react-redux';
import { logOutUser, logInForRefresh } from './actions/UserActions';
import { getUserBooks } from './actions/BookActions';

class App extends Component {

  componentDidMount() {
    if (sessionStorage['user']) {
      this.props.logInForRefresh(sessionStorage['user'], sessionStorage['username'])
      this.props.getUserBooks(sessionStorage['user'])
    }
  }

  render() {
    const loggedIn = () => !!sessionStorage['user']
    const logout = () => {
      if(!!sessionStorage['jwt'])
      sessionStorage.removeItem('jwt')
      sessionStorage.removeItem('user')
      sessionStorage.removeItem('username')
      this.props.logOutUser(this.props.user)
      return <Redirect to="/"/>
    }
    // const logged = loggedIn() ? <NYTbookList user={this.props.user} getUserBooks={this.props.getUserBooks}/> : <UserContainer signUp={this.props.signUp}/>
    // const nav = loggedIn() > <NavBar username={this.props.username} books={this.props.books} /> : null
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={() => <UserContainer signUp={this.props.signUp}/>} />
        <Route path="/login" component={() => logout()} />
        <Route path="/logout" component={() => logout()} />
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    books: state.user.books,
    signUp: state.user.signUp,
    loggedIn: state.user.loggedIn,
    username: state.user.username,
    user: state.user.userId
  }
}

export default connect(mapStateToProps,{logOutUser, getUserBooks, logInForRefresh})(App);
