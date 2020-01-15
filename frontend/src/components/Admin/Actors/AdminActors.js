import React, { useEffect } from 'react';
import AddActor from './AddActor';
import DeleteActor from './DeleteActor';
import { Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';


const AdminActors = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Actor administration</div>
        <Route exact path="/admin/actors/add">
          <AddActor facade={props.facade} allActors={props.allActors} />
        </Route>

        <Route exact path="/admin/actors/delete">
          <DeleteActor facade={props.facade} allActors={props.allActors} />
        </Route>
      </div>
    </Col>
  );
}
export default AdminActors;