import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const AddGenre = (props) => {
  const [genre, setGenre] = useState({
    "name": ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    const target = evt.target;
    genre[target.id] = target.value;
    setGenre({ ...genre });

  }

  const onClick = evt => {
    evt.preventDefault();
    if (genre.name === "" || genre.about === "") {
      setError("You may not leave any fields empty!");
    } else {
      setError("");
      props.facade.addGenre(genre)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
          setGenre({ ...res })
          props.allGenres.push(genre);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>



      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="name">
        <Form.Label>What is the name of the genre?</Form.Label>
        <Form.Control type="text" placeholder="Eg. Action" />
      </Form.Group>


      <Button onClick={onClick}>Add genre</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The genre has been added!</Alert>
        ) : null
      }



    </Form>

  );
}

export default AddGenre;