import React, { useEffect } from 'react';
import AddGenre from './AddGenre';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminGenre = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Genre administration</div>
        <h5>Add Genre</h5>
        <AddGenre facade={props.facade} allGenres={props.allGenres} />
        <hr />
      </div>
    </Col>
  );
}
export default AdminGenre;