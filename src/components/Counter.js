import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends Component {
  state = { counter: 0 };
  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  onReset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
          <button onClick={this.onReset}>Reset</button>
          <CounterDisplay counterValue={this.state.counter} />
        </div>
      </>
    );
  }
}

export default Counter;
