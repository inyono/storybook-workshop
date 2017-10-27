import * as NB from "native-base";
import React from "react";

export const createGameState = board =>
  board.map(row =>
    row.map(number => {
      // If a number is given, mark the number as constant
      const type = number ? "CONST" : "EDITABLE";

      return { type, number };
    })
  );

const getRows = board => board;
const getCols = board =>
  board.map((row, i) => row.map((_cell, j) => board[j][i]));
const getSubgrids = size => board => {
  let subgrids = [];
  for (let i = 0; i < board.length; i += size) {
    for (let j = 0; j < board.length; j += size) {
      let subgrid = [];

      for (let k = 0; k < size; k++) {
        for (let l = 0; l < size; l++) {
          subgrid.push(board[i + k][j + l]);
        }
      }

      subgrids.push(subgrid);
    }
  }

  return subgrids;
};

const isCorrect = board => {
  const entities = [
    ...getRows(board),
    ...getCols(board),
    ...getSubgrids(2)(board)
  ];

  return entities.every(
    entity =>
      entity
        .map(({ number }) => number)
        .sort()
        .join("") === "1234"
  );
};

const buttonStyle = { alignSelf: "center", margin: 10 };
const textStyle = { padding: 10, width: 50, textAlign: "center" };

const Sudoku4 = ({ state, setState, onGameOver }) => {
  const onChange = (i, j) => number => {
    const newState = [...state];
    newState[i][j].number = number;

    setState(newState);

    if (isCorrect(newState)) {
      onGameOver();
    }
  };

  return (
    <NB.Content style={{ margin: 10 }}>
      <NB.Grid>
        {state.map((row, i) => (
          <NB.Row key={i}>
            {row.map(({ type, number }, j) => (
              <NB.Col key={j}>
                {type === "CONST" ? (
                  <NB.View style={buttonStyle}>
                    <NB.Text style={textStyle}>{number}</NB.Text>
                  </NB.View>
                ) : (
                  <NB.Picker
                    mode="dropdown"
                    placeholder=""
                    selectedValue={number}
                    disabled
                    onValueChange={onChange(i, j)}
                    style={[
                      buttonStyle,
                      { borderRadius: 5, backgroundColor: "#eee" }
                    ]}
                    textStyle={textStyle}
                  >
                    <NB.Picker.Item label="" />
                    <NB.Picker.Item label="1" value={1} />
                    <NB.Picker.Item label="2" value={2} />
                    <NB.Picker.Item label="3" value={3} />
                    <NB.Picker.Item label="4" value={4} />
                  </NB.Picker>
                )}
              </NB.Col>
            ))}
          </NB.Row>
        ))}
      </NB.Grid>
    </NB.Content>
  );
};

export default Sudoku4;
