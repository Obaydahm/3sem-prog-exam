import React, { useEffect } from 'react';
import AddMovie from './AddMovie';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminMovies = (props) => {

  const test = [1, 2, 3, 4, 5];

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Movie administration</div>
        <h5>Add movie</h5>
        <AddMovie facade={props.facade} allDirectors={props.allDirectors} allActors={props.allActor} allGenres={props.allGenres} years={props.years} />
        <hr />
      </div>
    </Col>
  );
}
export default AdminMovies;