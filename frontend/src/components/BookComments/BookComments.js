import React, { Component } from "react";
import BookCommentForm from './BookCommentForm';

class BookComments extends Component {
  state = {
    comment: "",
  }

  onSubmitComment = event => {
    event.preventDefault();
    const book = this.props.book
    book.comment = this.state.comment
    this.setState({comment: ""})
    this.props.setShowBookCommentsComponent(!this.props.showBookCommentComponent)
    this.props.addBookComment(book)
  }

  handleCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const placeholderText = this.props.book.comment ? this.props.book.comment : "Add your comment for this book here."
    const submitButtonText = this.props.book.comment ? "Edit Comment" : "Add Comment"
    const display = !this.props.showBookCommentComponent ? {display: 'none'} : {}
    return (
      <BookCommentForm onSubmitComment={this.onSubmitComment} comment={this.state.comment} handleCommentChange={this.handleCommentChange} submitButtonText={this.submitButtonText}
      book={this.props.book.comment} showBookCommentComponent={this.props.showBookCommentComponent} placeholderText={placeholderText} submitText={submitButtonText} display={display}/>
    );
  }

}

export default BookComments;
