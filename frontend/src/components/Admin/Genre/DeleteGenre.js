import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const DeleteGenre = (props) => {
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    setGenre(evt.target.value);
  }

  const onClick = evt => {
    evt.preventDefault();
    console.log(genre);
    if (genre === "") {
      setError("You must choose a genre!");
    } else {
      setError("");
      props.facade.deleteGenre(genre)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Delete genre</h5>



      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="year">
        <Form.Label>What genre would you like to delete?</Form.Label>
        <Form.Control as="select">
          <option>Select a genre</option>
          {
            props.allGenres.map((genre, i) => (
              <option key={i} value={genre.id}>{genre.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button onClick={onClick}>Add genre</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The genre has been deleted!</Alert>
        ) : null
      }



    </Form>

  );
}

export default DeleteGenre;