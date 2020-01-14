import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import "./App.css";
import facade from "./apiFacade";
import LogIn from "./components/LogIn";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} logout={logout} facade={facade} />
        <Switch>
          <Route exact path="/">
            <Welcome loggedIn={loggedIn} facade={facade} />
          </Route>
          <Route path="/login">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
                <Redirect to="/" />
              )
            }
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

const Header = (props) => {
  console.log(props.facade.getRole())
  return (
    <ul className="menu">
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

const Welcome = (props) => {

  return (
    <div className="main">
      <div className="wrap">
        <h1>Welcome</h1>
        {
          props.loggedIn ? (
            <p>You're logged in as {props.facade.getRole()}!</p>
          ) : (
              <p>You're not logged in!</p>
            )

        }
      </div>
    </div>
  )
}

export default App;
