import React, { useEffect } from 'react';
import AddMovie from './AddMovie';
import DeleteMovie from './DeleteMovie';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


const AdminMovies = (props) => {

  return (

    <Col style={{ flexDirection: "column" }} md="7">
      <div className="default-box">
        <div className="box-header">Movie administration</div>


        <Route exact path="/admin/movies/add">
          <AddMovie facade={props.facade} allDirectors={props.allDirectors} allActors={props.allActor} allGenres={props.allGenres} years={props.years} />
        </Route>

        <Route exact path="/admin/movies/edit">

        </Route>

        <Route exact path="/admin/movies/delete">
          <DeleteMovie
            facade={props.facade}
            allMovies={props.allMovies}
            error={props.error}
            setError={props.setError}
            success={props.success}
            setSuccess={props.setSuccess}
            deletedMovie={props.deletedMovie}
            setDeletedMovie={props.setDeletedMovie} />
        </Route>

      </div>
    </Col>
  );
}
export default AdminMovies;