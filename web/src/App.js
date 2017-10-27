import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

import Login from "./login";
import Dashboard from "./dashboard";

const App = () => (
  <BrowserRouter>
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            Storybook
          </Menu.Item>
        </Container>
      </Menu>
      <Container text style={{ marginTop: "7em" }}>
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
    </div>
  </BrowserRouter>
);

export default App;
