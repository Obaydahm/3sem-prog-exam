import React, { useEffect } from 'react';
import AddDirector from './AddDirector';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminDirectors = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Director administration</div>
        <h5>Add director</h5>
        <AddDirector facade={props.facade} allDirectors={props.allDirectors} />
        <hr />
      </div>
    </Col>
  );
}
export default AdminDirectors;