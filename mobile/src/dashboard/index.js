import * as NB from "native-base";
import React from "react";
import { Route } from "react-router-native";

import games from "../games";
import Dashboard from "./Dashboard";
import Game from "./Game";
import Profile from "./Profile";

const DashboardContainer = ({ history, match, location, logout }) => {
  const { pathname } = location;
  const { username } = match.params;
  const dashboardUrl = match.url;

  return (
    <NB.Container>
      <NB.Header>
        <NB.Left />
        <NB.Body>
          <NB.Title>Storybook</NB.Title>
        </NB.Body>
        <NB.Right />
      </NB.Header>
      <NB.Content style={{ padding: 10 }}>
        <Route
          exact
          path={match.url}
          render={() => (
            <Dashboard
              username={username}
              games={games}
              gotoGame={id => history.push(`${match.url}/game/${id}`)}
            />
          )}
        />
        <Route
          path={`${match.url}/profile`}
          render={() => <Profile username={username} onLogout={logout} />}
        />
        <Route
          path={`${match.url}/game/:id`}
          render={({ match }) => {
            const { id } = match.params;
            const game = games[id];

            return (
              <Game
                {...game}
                onGameOver={() => {
                  NB.Toast.show({
                    text: "You solved it!",
                    position: "bottom",
                    buttonText: "Okay",
                    type: "success",
                    duration: 2500
                  });
                  setTimeout(() => history.push(dashboardUrl), 2500);
                }}
              />
            );
          }}
        />
      </NB.Content>
      <NB.Footer>
        <NB.FooterTab>
          <NB.Button
            vertical
            onPress={() => history.push(match.url)}
            active={pathname === match.url}
          >
            <NB.Icon name="apps" />
            <NB.Text>Dashboard</NB.Text>
          </NB.Button>
          <NB.Button
            vertical
            onPress={() => history.push(`${match.url}/profile`)}
            active={pathname === `${match.url}/profile`}
          >
            <NB.Icon name="person" />
            <NB.Text>Profile</NB.Text>
          </NB.Button>
        </NB.FooterTab>
      </NB.Footer>
    </NB.Container>
  );
};

export default DashboardContainer;
