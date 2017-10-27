import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Dashboard from "./Dashboard";

storiesOf("Dashboard", module).add("default", () => (
  <Dashboard username="inyono" />
));
