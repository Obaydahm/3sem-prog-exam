import React, { useEffect } from 'react';
import AddActor from './AddActor';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminActors = (props) => {

  const test = [1, 2, 3, 4, 5];

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Actor administration</div>
        <h5>Add actor</h5>
        <AddActor facade={props.facade} />
        <hr />
      </div>
    </Col>
  );
}
export default AdminActors;