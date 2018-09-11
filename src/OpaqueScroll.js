import React, { Component } from "react";
class OpaqueScroll extends Component {
  render() {
    console.log(this.context);
    return this.props.children;
  }
}
export default OpaqueScroll;
