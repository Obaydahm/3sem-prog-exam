import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Home = (props) => {
  const facade = props.facade;
  const [search, setSearch] = useState({ "query": "", "searchBy": "" });
  const [searchResults, setSearchResults] = useState([{ directors: [], actors: [], genres: [] }]);
  const onChange = evt => {
    const target = evt.target;
    if (target.tagName === "SELECT") {
      search['searchBy'] = target.value;
      setSearch({ ...search });
      switch (target.value) {
        case "getbytitle":
          document.getElementById("searchInput").placeholder = "Eg. Bad Boys For Life";
          break;

        case "getbydirector":
          document.getElementById("searchInput").placeholder = "Eg. Will Smith";
          break;

        case "getbyactor":
          document.getElementById("searchInput").placeholder = "Eg. Martin Lawrence";
          break;

        case "getbygenre":
          document.getElementById("searchInput").placeholder = "Eg. Action";
          break;
        default:
          break;
      }
    } else if (target.tagName === "INPUT") {
      search['query'] = target.value;
      setSearch({ ...search });
    }
  }

  const onClick = evt => {
    evt.preventDefault();
    if (search.query === "" || search.searchBy === "") {
      document.getElementById("search-results").innerText = "You may not leave any fields empty.";
    } else {
      facade.fetchMovies(search)
        .then(res => setSearchResults([...res]))
        .catch(err => {
          console.log(err)
          setSearchResults([{ directors: [], actors: [], genres: [] }]);
        });
    }
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">

        <Col className="d-flex default-box" style={{ flexDirection: "column" }} md="7">
          <div className="box-header">Home</div>
          <div>
            <p>
              Feel free to search for any movie by movie title, director, actor or genre.
            </p>
            <Form onChange={onChange}>
              <InputGroup className="mb-3">

                <Form.Control
                  id="searchInput"
                  placeholder="Please choose what you want to search by"
                  aria-label="search-input"
                />
                <InputGroup.Append>
                  <Form.Control as="select" style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}>
                    <option value="">Please choose</option>
                    <option value="getbytitle">Title</option>
                    <option value="getbydirector">Director</option>
                    <option value="getbyactor">Actor</option>
                    <option value="getbygenre">Genre</option>
                  </Form.Control>
                </InputGroup.Append>
              </InputGroup>
              <Button onClick={onClick}>Search for movie</Button>
            </Form>
          </div>
          <div className="search-results-box" id="search-results">
            {
              searchResults[0].directors.length > 0 ? (
                <ul className="movie-list">
                  {
                    searchResults.map((movie, i) => (
                      <li key={i} className="movie-box">
                        <div>
                          <label>Title:</label>{movie.title}
                        </div>

                        <div>
                          <label>Year:</label>{movie.year}
                        </div>

                        <div>
                          <label>Directors:</label>
                          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            {
                              movie.directors.map((director, j) => (
                                <li key={j}> {director.name}</li>
                              ))
                            }
                          </ul>
                        </div>

                        <div>
                          <label>Actors:</label>
                          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            {
                              movie.actors.map((actor, ij) => (
                                <li key={ij}> {actor.name}</li>
                              ))
                            }
                          </ul>
                        </div>

                        <div>
                          <label>Genres:</label>
                          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                            {
                              movie.genres.map((genre, iji) => (
                                <li key={iji}> {genre.name}</li>
                              ))
                            }
                          </ul>
                        </div>

                        <div className="votes">
                          <Button>Thumbs down</Button>
                          <Alert variant="light" style={{ marginBottom: 0 }}>{movie.votes}</Alert>
                          <Button>Thumbs up</Button>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              ) : (
                  <span>No results</span>
                )
            }
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default Home;