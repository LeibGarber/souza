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
import Shuk from "./Shuk";
import Murals from "./Murals";
import Contact from "./Contact";
import Insta from "./imgs/instagram.svg";
import Facebook from "./imgs/facebook.svg";

console.log(Insta);
console.log(Facebook);

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
                <img src={Insta} className="social-square" />
              </li>
              <li>
                <img src={Facebook} className="social-square" />{" "}
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
