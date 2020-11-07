import React, { Component } from 'react';
import BookComment from '../BookComments/BookComment';
import BookComments from '../BookComments/BookComments';
import { Button } from 'react-bootstrap';

class UserBookCard extends Component {
  state = {
    showBookCommentComponent: false
  }

  setShowBookCommentComponent = (getback) => {
    this.setState({showBookCommentComponent: getback})
  }

  render() {
    const { book } = this.props
    const showBookCommentForm = this.state.showBookCommentComponent ? <BookComment addBookComment={this.props.addBookComment} book={book} setShowBookCommentComponent={this.setShowBookCommentComponent} showBookCommentComponent={this.state.showBookCommentComponent}/> : null
    const show = this.state.showBookCommentComponent ? {display: 'none'} : {}
    const bookComment = book.comment ? <BookComment comment={book.comment} /> : null
    const buttonText = !book.comment ? "Add Book Comment" : "Edit Book Comment"
    return (
      <li className="pborder">
        <h4>{book.title}</h4>
        <h6>By {book.author}</h6>
        <p>{book.description}</p>
        {bookComment}
        <Button bsStyle="success" style={show} onClick={() => this.setState({showBookCommentComponent: !this.state.showBookCommentComponent})}>{buttonText}</Button>
        {showBookCommentForm}
        <Button bsStyle="link" onClick={() => this.props.deleteUserBook(book)}>Delete This Book</Button>
      </li>
    );
  }

}

export default UserBookCard;
