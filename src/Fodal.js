import React, { Component } from "react";
import "./Fodal.css";

class Fodal extends Component {
  state = {
    open: false
  };

  toggleFodal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div
        className={this.state.open ? "Fodal-Open" : "Fodal-Closed"}
        onClick={this.toggleFodal}
      >
        {this.state.open ? (
          <div className="Fodal-Content"> {this.props.children}</div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default Fodal;
