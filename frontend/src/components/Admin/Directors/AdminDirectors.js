import React, { useEffect } from 'react';
import AddDirector from './AddDirector';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminDirectors = (props) => {

  const test = [1, 2, 3, 4, 5];

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Director administration</div>
        <h5>Add director</h5>
        <AddDirector facade={props.facade} allDirectors={props.allDirectors} allActors={props.allActor} allGenres={props.allGenres} years={props.years} />
        <hr />
      </div>
    </Col>
  );
}
export default AdminDirectors;