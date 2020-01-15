import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const AddDirector = (props) => {
  const [director, setDirector] = useState({
    "name": "",
    "about": ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    const target = evt.target;
    director[target.id] = target.value;
    setDirector({ ...director });

  }

  const onClick = evt => {
    evt.preventDefault();
    if (director.name === "" || director.about === "") {
      setError("You may not leave any fields empty!");
    } else {
      setError("");
      props.facade.addDirector(director)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
          setDirector({ ...res })
          props.allDirectors.push(director);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Add director</h5>


      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="name">
        <Form.Label>What is the fullname of the director?</Form.Label>
        <Form.Control type="text" placeholder="Eg. Will Smith" />
      </Form.Group>

      <Form.Group controlId="about">
        <Form.Label>About the director</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Eg. bla bla bla bla" />
      </Form.Group>

      <Button onClick={onClick}>Add director</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The director has been added!</Alert>
        ) : null
      }



    </Form>

  );
}

export default AddDirector;