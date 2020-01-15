import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const DeleteMovie = (props) => {
  const [movie, setMovie] = useState("");


  const onChange = evt => {
    setMovie(evt.target.value);
  }

  const onClick = evt => {
    evt.preventDefault();
    console.log(movie);
    if (movie === "") {
      props.setError("You must choose a movie!");
    } else {
      props.setError("");
      props.facade.deleteMovie(movie)
        .then(res => {
          if (res.hasOwnProperty("id")) props.setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Delete movie</h5>



      {
        props.error !== "" ? (
          <Alert variant="danger">{props.error}</Alert>
        ) : null
      }

      <Form.Group controlId="year">
        <Form.Label>What movie would you like to delete?</Form.Label>
        <Form.Control as="select">
          <option>Select a movie</option>
          {
            props.allMovies.map((movie, i) => (
              <option key={i} value={movie.id}>{movie.title}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button onClick={onClick}>Add movie</Button>
      {
        props.success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The movies has been deleted!</Alert>
        ) : null
      }



    </Form>

  );
}

export default DeleteMovie;