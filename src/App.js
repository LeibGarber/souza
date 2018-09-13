import React, { Component } from "react";
import logo from "./imgs/favicon.ico";
import "./App.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Contact from "./Contact";

class App extends Component {
  render() {
    console.log("fuck this");
    return (
      <Router>
        <div className="App">
          <header>
            <h2>
              <NavLink className="logo" to="/home">
                Solomon Souza
              </NavLink>
            </h2>
            <nav>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/content1">Content </NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </nav>
          </header>

          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/content1" component={Content1} />

            <Route exact path="/contact" component={Contact} />
            <Redirect from="/" to="/home" />
          </Switch>

          <footer>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-snapchat-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github-square" />
                </a>
              </li>
            </ul>
            <p>
              Made by{" "}
              <a href="..." target="_blank">
                CapsLok
              </a>.{" "}
            </p>
            <p>Watch us ball out on these mofos</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
