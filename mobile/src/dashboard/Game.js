import React, { Component } from "react";

class GameWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { state: props.initialState };
  }

  render() {
    const C = this.props.Component;
    return (
      <C
        state={this.state.state}
        setState={state => this.setState({ state })}
        onGameOver={this.props.onGameOver}
      />
    );
  }
}

export default GameWrapper;
