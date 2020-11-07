import React, { Component } from 'react';
import { getUserBooks, addBookComment, deleteUserBook } from '../../actions/BookActions';
import { logInForRefresh } from '../../actions/UserActions';
import UserBookCard from './UserBookCard';
import SearchBar from '../SearchBar';
import { connect } from 'react-redux';

class UserBooks extends Component {
  state = {
    term: "",
    sort: false
  }

  getSearch = (term ) => {
    this.setState({term: term })
  }

  lowerCase = (book, search) => {
    return book.title.toLowerCase().includes(search.toLowerCase()) || book.description.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  }

  filterIt = (search) => {
    return (book) => {
      return !book.comment ? this.lowerCase(book, search) : book.comment.toLowerCase().includes(search.toLowerCase()) || this.lowerCase(book, search)
    }
  }

  onAlph = () => {
    this.setState({sort: !this.state.sort})
  }

  render() {
    const booksList = this.props.books.length > 0 ? this.props.books.filter(this.filterIt(this.state.term)).map(book => {return (<UserBookCard
    key={book.id}
    book={book}
    deleteUserBook={this.props.deleteUserBook}
    userId={this.props.user}
    addBookComment={this.props.addBookComment} />)
    }
  ) : <h5 className="white">You don't have any books saved to your list! Click on a book card to save the book.</h5>
    return (
      <div className="userBooks" style={this.props.display}>
        <h1>{this.props.username}'s Books</h1>
        <SearchBar getSearch={this.getSearch} />
        <br></br>
          { booksList }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    books: state.user.books,
    user: state.user.userId,
    username: state.user.username
  })
}

export default connect(mapStateToProps,{getUserBooks,deleteUserBook,addBookComment, logInForRefresh})(UserBooks);
