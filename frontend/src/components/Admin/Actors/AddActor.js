import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const AddActor = (props) => {
  const [actor, setActor] = useState({
    "name": "",
    "about": ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    const target = evt.target;
    actor[target.id] = target.value;
    setActor({ ...actor });

  }

  const onClick = evt => {
    evt.preventDefault();
    if (actor.name === "" || actor.about === "") {
      setError("You may not leave any fields empty!");
    } else {
      setError("");
      props.facade.addActor(actor)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
          setActor({ ...res })
          props.allActors.push(actor);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Add actor</h5>

      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="name">
        <Form.Label>What is the fullname of the actor?</Form.Label>
        <Form.Control type="text" placeholder="Eg. Will Smith" />
      </Form.Group>

      <Form.Group controlId="about">
        <Form.Label>About the actor</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Eg. bla bla bla bla" />
      </Form.Group>

      <Button onClick={onClick}>Add actor</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The actor has been added!</Alert>
        ) : null
      }



    </Form>

  );
}

export default AddActor;