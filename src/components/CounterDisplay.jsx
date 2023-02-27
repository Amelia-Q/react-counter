import React, { Component } from "react";

class CounterDisplay extends Component {
  render() {
    return <p>{this.props.counterValue}</p>;
  }
}

export default CounterDisplay;
