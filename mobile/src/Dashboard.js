import * as NB from "native-base";
import React from "react";

const Dashboard = ({ username }) => (
  <NB.Container>
    <NB.Header>
      <NB.Left />
      <NB.Body>
        <NB.Title>Storybook</NB.Title>
      </NB.Body>
      <NB.Right />
    </NB.Header>
    <NB.Content style={{ padding: 10 }}>
      <NB.H2>Welcome back, {username}</NB.H2>
    </NB.Content>
  </NB.Container>
);

export default Dashboard;
