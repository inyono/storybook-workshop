import React, { Component } from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Game from "../dashboard/Game";
import Sudoku4, { createGameState } from ".";

const initialStates = [
  [[null, 2, 4, 1], [null, 4, 3, null], [null, 3, 1, 4], [4, null, null, 3]]
].map(createGameState);

storiesOf("Sudoku 4x4", module).add("default", () => (
  <Game Component={Sudoku4} initialState={initialStates[0]} />
));
