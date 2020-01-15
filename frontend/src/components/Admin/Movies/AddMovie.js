import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const AddMovie = (props) => {
  const [movie, setMovie] = useState({
    "title": "",
    "year": "",
    "directors": [{}],
    "actors": [{}],
    "genres": [{}]
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onChange = evt => {
    const target = evt.target;
    if (target.tagName === "SELECT" && target.id !== "year") {
      const options = evt.target.options;
      let selected = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selected.push({ "name": options[i].value })
        }
      }
      movie[target.id] = selected;
      setMovie({ ...movie })
    } else {
      movie[target.id] = target.value;
      setMovie({ ...movie });
    }
  }

  const onClick = evt => {
    evt.preventDefault();
    if (
      movie.title === "" ||
      movie.year === "" ||
      movie.directors.length < 1 ||
      movie.actors.length < 1 ||
      movie.genres.length < 1
    ) {
      setError("You may not leave any fields empty!");
    } else {
      setError("");
      props.facade.addMovie(movie)
        .then(res => {
          if (res.hasOwnProperty("id")) setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  }



  return (
    <Form onChange={onChange}>
      <h5>Add movie</h5>


      {
        error !== "" ? (
          <Alert variant="danger">{error}</Alert>
        ) : null
      }

      <Form.Group controlId="title">
        <Form.Label>What is the title of the movie?</Form.Label>
        <Form.Control type="text" placeholder="Eg. Bad Boys" />
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>What year was it/will it get published</Form.Label>
        <Form.Control as="select">
          <option>Select a year</option>
          {
            props.years.map((year, i) => (
              <option key={i}>{year}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="directors">
        <Form.Label>Choose the directors</Form.Label>
        <Form.Control as="select" multiple>
          {
            props.allDirectors.map((director, i) => (
              <option key={i}>{director.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="actors">
        <Form.Label>Choose the actors</Form.Label>
        <Form.Control as="select" multiple>
          {
            props.allActors.map((actor, i) => (
              <option key={i}>{actor.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="genres">
        <Form.Label>Choose the genres</Form.Label>
        <Form.Control as="select" multiple>
          {
            props.allGenres.map((genre, i) => (
              <option key={i}>{genre.name}</option>
            ))
          }
        </Form.Control>
      </Form.Group>

      <Button onClick={onClick}>Add movie</Button>
      {
        success ? (
          <Alert variant="success" style={{ marginTop: 10 }}>The movies has been added!</Alert>
        ) : null
      }



    </Form>

  );
}

export default AddMovie;