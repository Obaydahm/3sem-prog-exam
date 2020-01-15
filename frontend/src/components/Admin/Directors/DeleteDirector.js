import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const DeleteDirector = (props) => {
  const [director, setDirector] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    setDirector(evt.target.value);
  }

  const onClick = evt => {
    evt.preventDefault();
    console.log(director);
    if (director === "") {
      setError("You must choose a director!");
    } else {
      setError("");
      props.facade.deleteDirector(director)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Delete director</h5>



      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="year">
        <Form.Label>What director would you like to delete?</Form.Label>
        <Form.Control as="select">
          <option>Select a director</option>
          {
            props.allDirectors.map((director, i) => (
              <option key={i} value={director.id}>{director.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button onClick={onClick}>Add director</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The director has been deleted!</Alert>
        ) : null
      }



    </Form>

  );
}

export default DeleteDirector;