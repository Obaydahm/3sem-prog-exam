import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import MovieMenu from './Movies/MovieMenu';
import DirectorMenu from './Directors/DirectorMenu';
import ActorMenu from './Actors/ActorMenu';
import GenreMenu from './Genre/GenreMenu';

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

      <Route path="/admin/movies">
        <MovieMenu />
      </Route>
      <Route path="/admin/directors">
        <DirectorMenu />
      </Route>
      <Route path="/admin/actors">
        <ActorMenu />
      </Route>
      <Route path="/admin/genres">
        <GenreMenu />
      </Route>
    </Col>
  );
}
export default AdminMenu;

/*

*/