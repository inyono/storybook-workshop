import { Container } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Login from "./login";
import Dashboard from "./Dashboard";
import { loadFonts } from "./utils";

const App = () => (
  <NativeRouter>
    <Container>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Login
            onSubmit={username => history.push(`/dashboard/${username}`)}
          />
        )}
      />
      <Route
        path="/dashboard/:username"
        render={({ match }) => <Dashboard username={match.params.username} />}
      />
    </Container>
  </NativeRouter>
);

export default loadFonts(App);
