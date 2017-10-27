import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DashboardContainer from ".";

storiesOf("Dashboard", module)
  .add("Dashboard", () => (
    <MemoryRouter initialEntries={["/inyono"]} initialIndex={0}>
      <Route
        path="/:username"
        render={props => (
          <DashboardContainer {...props} logout={action("logout")} />
        )}
      />
    </MemoryRouter>
  ))
  .add("Profile", () => (
    <MemoryRouter initialEntries={["/inyono/profile"]} initialIndex={0}>
      <Route
        path="/:username"
        render={props => (
          <DashboardContainer {...props} logout={action("logout")} />
        )}
      />
    </MemoryRouter>
  ));
