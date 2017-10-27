import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Login from "./Login";

storiesOf("Login", module).add("default", () => (
  <Login onSubmit={action("onSubmit")} />
));
