import React, { Component } from "react";
import logo from "./imgs/favicon.ico";
import "./App.css";
import { Route, NavLink, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content1 from "./Content1";
import Shuk from "./Shuk";
import Murals from "./Murals";
import Contact from "./Contact";
import Insta from "./imgs/instagram.svg";
import Facebook from "./imgs/facebook.svg";
import { NavDrop } from "capslok-lib";

class App extends Component {
  state = {
    menuOpen: false
  };

  navigate = navItem => {
    this.props.history.push(navItem);
    this.setState({ menuOpen: false });
  };

  toggleMenu = () =>
    console.log("fucktard") ||
    this.setState({ menuOpen: !this.state.menuOpen });

  render() {
    return (
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
            <li className="dropNav">
              <NavDrop
                menuOpen={this.state.menuOpen}
                navItems={["Content1", "Murals", "Shuk"]}
                onClick={this.navigate}
              >
                <a onClick={this.toggleMenu}>Content</a>
              </NavDrop>
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
          <Route exact path="/shuk" component={Shuk} />
          <Route exact path="/murals" component={Murals} />
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
    );
  }
}

export default withRouter(App);
