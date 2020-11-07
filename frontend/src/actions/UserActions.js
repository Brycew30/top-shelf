const logInUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}

export const logInForRefresh = (userId, username) => {
  return {
    type: 'LOGINFORREFRESH',
    userId, username
  }
}

export const showSignup = (user) => {
  return {
    type: 'SHOW_SIGN_UP',
    user
  }
}

export const logOutUser = (user) => {
  return {
    type: 'LOGOUT_USER',
    user
  }
}

export const signUpUser = (user) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user })
  }
    return(dispatch) => {
      fetch('/api/v1/users', data)
      .then(response => response.json())
      .then(response => {
        sessionStorage.setItem('jwt', response.jwt)
        sessionStorage.setItem('user', response.user.id)
        sessionStorage.setItem('username', response.user.username)
        dispatch(logInUser({username: response.user.username, password: response.user.password_digest, id: response.user.id}))
        dispatch({ type: 'ADD_ALERT_MESSAGE', message: {text: "Welcome to Top Shelf!", type: "success"} })}).catch(error => {
          dispatch({ type: 'ADD_ALERT_MESSAGE', message: {text: "That Username is already taken", type: "error"} })
        })
    }
}

export const logInThisUser = (user) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Credentials': 'include',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
  }
    return dispatch => {
      dispatch({ type: "LOADING_USER_INFO" })
      fetch(`/api/v1/login`, data)
        .then(response => response.json())
        .then(response => {
          sessionStorage.setItem('jwt', response.jwt)
          sessionStorage.setItem('user', response.user.id)
          sessionStorage.setItem('username', response.user.username)
          dispatch(logInUser( {username: response.user.username, password: response.user.password_digest, id: response.user.id}))
        }).catch(error => {
          dispatch({ type: 'ADD_ALERT_MESSAGE', message: {text: "Loginn failed, please check your username and password, and try again", type:"error"}})
        })
    }
}
