import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BadgeBubble from '../Badge/BadgeBubble';
import './NavBarComponent.css'

const NavBarComponent = (props) => {

    return (
      <div>
        <header>
          <Navbar className="justify-content-end" expand="sm" variant="light" bg="light">
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to={`/users/${props.username}/books`}>My Book List</NavLink>{props.books.length > 0 ? <BadgeBubble count={props.books.length}/> : null}</li>
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
