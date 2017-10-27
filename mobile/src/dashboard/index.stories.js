import React from "react";
import { MemoryRouter, Route } from "react-router-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import DashboardContainer from ".";

storiesOf("Dashboard", module)
  .add("Dashboard", () => (
    <MemoryRouter initialEntries={["/inyono"]} initialIndex={0}>
      <Route path="/:username" component={DashboardContainer} />
    </MemoryRouter>
  ))
  .add("Profile", () => (
    <MemoryRouter initialEntries={["/inyono/profile"]} initialIndex={0}>
      <Route path="/:username" component={DashboardContainer} />
    </MemoryRouter>
  ));
