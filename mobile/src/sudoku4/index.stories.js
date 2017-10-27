import React, { Component } from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Sudoku4, { createGameState } from ".";

class MockGame extends Component {
  constructor(props) {
    super(props);
    this.state = { state: props.initialState };
  }

  render() {
    const { Game } = this.props;

    return (
      <Game
        state={this.state.state}
        setState={state => this.setState({ state })}
        onGameOver={action("GameOver")}
      />
    );
  }
}

const initialStates = [
  [[null, 2, 4, 1], [null, 4, 3, null], [null, 3, 1, 4], [4, null, null, 3]]
].map(createGameState);

storiesOf("Sudoku 4x4", module).add("default", () => (
  <MockGame Game={Sudoku4} initialState={initialStates[0]} />
));
