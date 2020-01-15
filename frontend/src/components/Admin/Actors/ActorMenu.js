import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const ActorMenu = (props) => {

  return (
    <div className="default-box">
      <div className="box-header">Actor Menu</div>
      <Nav className="flex-column">
        <Nav><NavLink to="/admin/actors/add">Add Actor</NavLink></Nav>
        <Nav><NavLink to="/admin/actors/edit">Edit Actor</NavLink></Nav>
        <Nav><NavLink to="/admin/actors/delete">Delete Actor</NavLink></Nav>

      </Nav>
    </div>
  );
}
export default ActorMenu;

/*

*/