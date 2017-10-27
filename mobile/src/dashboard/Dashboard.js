import * as NB from "native-base";
import React from "react";

const Dashboard = ({ username, games, gotoGame }) => (
  <NB.Content>
    <NB.H2>Welcome back, {username}</NB.H2>
    {games.map((game, id) => (
      <NB.Button
        onPress={() => gotoGame(id)}
        block
        key={id}
        style={{ marginVertical: 10 }}
      >
        <NB.Text>Start game {id}</NB.Text>
      </NB.Button>
    ))}
  </NB.Content>
);

export default Dashboard;
