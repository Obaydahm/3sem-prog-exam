import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const GenreMenu = (props) => {

  return (
    <div className="default-box">
      <div className="box-header">Genre Menu</div>
      <Nav className="flex-column">
        <Nav><NavLink to="/admin/genres/add">Add Genre</NavLink></Nav>
        <Nav><NavLink to="/admin/genres/edit">Edit Genre</NavLink></Nav>
        <Nav><NavLink to="/admin/genres/delete">Delete Genre</NavLink></Nav>

      </Nav>
    </div>
  );
}
export default GenreMenu;

/*

*/