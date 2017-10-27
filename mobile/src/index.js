import { Container } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as NB from "native-base";
import { NativeRouter, Route } from "react-router-native";

import Login from "./login";
import Dashboard from "./dashboard";
import { loadFonts } from "./utils";

const App = () => (
  <NativeRouter>
    <Container>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Login onSubmit={username => history.push(`/app/${username}`)} />
        )}
      />
      <Route
        path="/app/:username"
        render={props => (
          <Dashboard {...props} logout={() => props.history.push("/")} />
        )}
      />
    </Container>
  </NativeRouter>
);

export default loadFonts(App);
