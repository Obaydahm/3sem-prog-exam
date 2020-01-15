import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import "./App.css";
import facade from "./apiFacade";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import AdminMenu from "./components/Admin/AdminMenu";

import AdminMovies from "./components/Admin/Movies/AdminMovies";
import AdminDirectors from "./components/Admin/Directors/AdminDirectors";
import AdminActors from "./components/Admin/Actors/AdminActors";
import AdminGenre from "./components/Admin/Genre/AdminGenre";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allDirectors, setAllDirectors] = useState([{}]);
  const [allMovies, setAllMovies] = useState([{}]);
  const [allActor, setAllActor] = useState([{}]);
  const [allGenres, setAllGenres] = useState([{}]);
  const [years, setYears] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [deletedMovie, setDeletedMovie] = useState({});

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then(res => setLoggedIn(true))
      .catch(err => console.log("wrong credentials"));
  };
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  useEffect(() => {
    console.log("rendered bro")
    let startYear = 2020;
    for (let i = 0; i < 2021 - 1960; i++) {
      years[i] = startYear;
      startYear--;
    }
    setYears([...years]);
    facade.fetchAllMovies()
      .then(res => setAllMovies([...res]))
      .catch(err => console.log(err));

    facade.fetchAllDirectors()
      .then(res => setAllDirectors([...res]))
      .catch(err => console.log(err));

    facade.fetchAllActors()
      .then(res => setAllActor([...res]))
      .catch(err => console.log(err));

    facade.fetchAllGenres()
      .then(res => setAllGenres([...res]))
      .catch(err => console.log(err));


  }, [])

  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} logout={logout} facade={facade} />
        <Switch>
          <Route exact path="/">
            <Home loggedIn={loggedIn} facade={facade} />
          </Route>
          <Route path="/login">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
                <Redirect to="/" />
              )
            }
          </Route>

          <Route path="/admin">
            <Container style={{ paddingBottom: 40 }}>
              <Row className="d-flex justify-content-center">
                <AdminMenu />
                <Route path="/admin/movies">
                  <AdminMovies
                    facade={facade}
                    allMovies={allMovies}
                    allDirectors={allDirectors}
                    allActor={allActor}
                    allGenres={allGenres}
                    years={years}
                    error={error}
                    setError={setError}
                    success={success}
                    setSuccess={setSuccess}
                    deletedMovie={deletedMovie}
                    setDeletedMovie={setDeletedMovie}
                  />
                </Route>

                <Route path="/admin/directors">
                  <AdminDirectors facade={facade} allDirectors={allDirectors} />
                </Route>

                <Route path="/admin/actors">
                  <AdminActors facade={facade} allActors={allActor} />
                </Route>

                <Route path="/admin/genres">
                  <AdminGenre facade={facade} allGenres={allGenres} />
                </Route>
              </Row>
            </Container>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

const Header = (props) => {
  return (
    <ul className="menu">
      <li><span className="logo">MovieRev</span></li>
      <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
      {
        props.loggedIn && props.facade.getRole() === "admin" ? (
          <li><NavLink to="/admin" activeClassName="active">Admin</NavLink></li>
        ) : null
      }

      {
        props.loggedIn ? (
          <li><NavLink to="/login" activeClassName="active" onClick={props.logout}>Logout</NavLink></li>
        ) : (
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>

          )
      }
    </ul>
  );
}

export default App;

/*
          {
            props.loggedIn ? (
              <p>You're logged in as {props.facade.getRole()}!</p>
            ) : (
                <p>You're not logged in!</p>

              )

          }
*/