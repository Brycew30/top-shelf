import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import book from '../../images/book.png'
import BadgeBubble from '../Badge/BadgeBubble';
import './NavBarComponent.css'

const NavBarComponent = (props) => {

    return (
      <div>
        <header>
          <Navbar expand="sm" variant="light" bg="light">
          <nav>
            <ul>
              <li><NavLink to="/"><img src={book} alt="book icon" /></NavLink></li>
              <li><NavLink to={`/users/${props.username}/books`}>My Books</NavLink>{props.books.length > 0 ? <BadgeBubble count={props.books.length}/> : null}</li>
              <li><NavLink to="/bestsellers-science" exact >Science</NavLink></li>
              <li><NavLink to="/bestsellers-fiction" exact>Fiction</NavLink></li>
              <li><NavLink to="/bestsellers-nonfiction" exact>Nonfiction</NavLink></li>
              <li><NavLink to="/logout">Log Out</NavLink></li>
            </ul>
          </nav>
          </Navbar>
        </header>
      </div>
    );
  }

export default NavBarComponent;
