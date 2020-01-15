import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import AddGenre from './AddGenre';
import DeleteGenre from './DeleteGenre';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminGenre = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Genre administration</div>

        <Route exact path="/admin/genres/add">
          <AddGenre facade={props.facade} allGenres={props.allGenres} />
        </Route>

        <Route exact path="/admin/genres/delete">
          <DeleteGenre facade={props.facade} allGenres={props.allGenres} />
        </Route>


        <hr />
      </div>
    </Col>
  );
}
export default AdminGenre;