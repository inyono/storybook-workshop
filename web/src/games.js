import Sudoku4, { createGameState } from "./sudoku4";

export default [
  {
    Component: Sudoku4,
    initialState: createGameState([
      [null, 2, 4, 1],
      [null, 4, 3, null],
      [null, 3, 1, 4],
      [4, null, null, 3]
    ])
  }
];
