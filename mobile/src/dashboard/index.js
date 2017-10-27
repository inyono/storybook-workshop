import * as NB from "native-base";
import React from "react";
import { Route } from "react-router-native";

import Dashboard from "./Dashboard";
import Profile from "./Profile";

const DashboardContainer = ({ history, match, location, logout }) => {
  const { pathname } = location;
  const { username } = match.params;

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
          render={() => <Dashboard username={username} />}
        />
        <Route
          path={`${match.url}/profile`}
          render={() => <Profile username={username} onLogout={logout} />}
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
