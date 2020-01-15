import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const DeleteActor = (props) => {
  const [actor, setActor] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    setActor(evt.target.value);
  }

  const onClick = evt => {
    evt.preventDefault();
    console.log(actor);
    if (actor === "") {
      setError("You must choose a actor!");
    } else {
      setError("");
      props.facade.deleteActor(actor)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Delete actor</h5>



      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="year">
        <Form.Label>What actor would you like to delete?</Form.Label>
        <Form.Control as="select">
          <option>Select a actor</option>
          {
            props.allActors.map((actor, i) => (
              <option key={i} value={actor.id}>{actor.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button onClick={onClick}>Add actor</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The actor has been deleted!</Alert>
        ) : null
      }



    </Form>

  );
}

export default DeleteActor;