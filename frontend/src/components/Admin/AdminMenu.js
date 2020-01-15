import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminMenu = (props) => {

  return (
    <Col style={{ flexDirection: "column" }} md="3">
      <div className="default-box">
        <div className="box-header">Admin Menu</div>
        <Nav className="flex-column">
          <Nav><NavLink to="/admin/movies">Movies</NavLink></Nav>
          <Nav><NavLink to="/admin/directors">Directors</NavLink></Nav>
          <Nav><NavLink to="/admin/actors">Actors</NavLink></Nav>
          <Nav><NavLink to="/admin/genres">Genres</NavLink></Nav>
        </Nav>
      </div>
    </Col>
  );
}
export default AdminMenu;

/*

*/