const setBooks = (books) => {
  return {
    type: 'GET_USER_BOOKS_SUCCESS',
    books
  }
}

export const setGenre = genre => {
  return {type: 'SET_GENRE',
  genre}
}

const deleteBook = book => {
  return {
    type: 'DELETE_USER_BOOK_SUCCESS',
    book
  }
}

const updateBook = book => {
  return {
    type: 'UPDATE_BOOK',
    book
  }
}

const setNytBooks = (books) => {
  return {
    type: `GET_NYT_BOOKS_SUCESS`, books
  }
}

export const getNytBooks = (genre) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BOOKS" })
    return fetch(`/api/v1/${genre}`)
    .then(response => response.json())
    .then(books => dispatch(setNytBooks(books)))
  }
}

export const getUserBooks = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_BOOKS" })
    return fetch(`/api/v1/users/${user}/books`)
    .then(response => response.json())
    .then(books => dispatch(setBooks(books)))
    .catch(error => console.log(error))
  }
}

export const postBook = (book, user) => {
  return (dispatch) => {
    const body = JSON.stringify({title: book.title, description: book.description, author: book.author, user_id: user})
    return fetch(`/api/v1/users/${user}/books`, {
      method: 'POST',
      headers: { "Content-Type": 'application/json', 'Authorization': sessionStorage.jwt },
      body: body
    })
    .then(response => response.json())
    .then(book => {
      dispatch({ type: 'ADD_BOOK', book })
      dispatch({ type: 'ADD_ALERT_MESSAGE', message: {text: "Your book has been added!", type: "success"}})})
  }
}

export const deleteUserBook = (book) => {
  return (dispatch) => {
    return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": 'application/json'},
    })
    .then(() => dispatch({ type: 'ADD_ALERT_MESSAGE', message:{text: "Your book has been deleted", type: "success"}}))
    .then(() => dispatch(deleteBook(book)))
    .catch(error => console.log(error))
  }
}

export const addBookComment = (book) => {
  const body = JSON.stringify({title: book.title, description: book.description, author: book.author, isbn: book.isbn, user_id: book.user_id, comment: book.comment})
  return (dispatch) => {
    return fetch(`/api/v1/users/${book.user_id}/books/${book.id}`, {
      method: 'PUT',
      headers: {"Content-Type": 'application/json' },
      body: body
    })
    .then(response => response.json())
    .then(data => dispatch(updateBook(book)))
    .catch(error => alert(error))
  }
}
