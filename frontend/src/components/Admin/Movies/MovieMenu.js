import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const MovieMenu = (props) => {

  return (
    <div className="default-box">
      <div className="box-header">Movie Menu</div>
      <Nav className="flex-column">
        <Nav><NavLink to="/admin/movies/add">Add Movie</NavLink></Nav>
        <Nav><NavLink to="/admin/movies/edit">Edit Movie</NavLink></Nav>
        <Nav><NavLink to="/admin/movies/delete">Delete Movie</NavLink></Nav>

      </Nav>
    </div>
  );
}
export default MovieMenu;

/*

*/