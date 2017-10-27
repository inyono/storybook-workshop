import React from "react";
import { Header, Card } from "semantic-ui-react";

const Dashboard = ({ username, games, gotoGame }) => {
  const items = games.map((game, id) => ({
    header: `Game ${id}`,
    onClick: () => gotoGame(id)
  }));

  return (
    <div>
      <Header>Welcome back, {username}</Header>
      <Card.Group items={items} />
    </div>
  );
};

export default Dashboard;
