import React from 'react';
import { Badge } from 'react-bootstrap';
import './BadgeBubble.css';

class BadgeBubble = (props) => {

  return (
    <Badge> { props.count } </Badge>
  );
}

export default BadgeBubble;
