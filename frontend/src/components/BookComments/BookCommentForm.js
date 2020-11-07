import React from 'react';
import { Button } from 'react-bootstrap';

const BookCommentForm = (props) => {
  return (
    <form onSubmit={props.onSubmitComment} style={props.display}>
      <textarea type="text" placeholder={props.placeholderText} value={props.comment} onChange={props.handleCommentChange}></textarea>
      <br/>
      <Button bsStyle="info" type="submit">{props.submitText}</Button>
    </form>
  )
}
export default BookCommentForm;
