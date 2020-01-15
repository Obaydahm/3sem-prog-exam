import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const DirectorMenu = (props) => {

  return (
    <div className="default-box">
      <div className="box-header">Director Menu</div>
      <Nav className="flex-column">
        <Nav><NavLink to="/admin/directors/add">Add Director</NavLink></Nav>
        <Nav><NavLink to="/admin/directors/edit">Edit Director</NavLink></Nav>
        <Nav><NavLink to="/admin/directors/delete">Delete Director</NavLink></Nav>

      </Nav>
    </div>
  );
}
export default DirectorMenu;

/*

*/