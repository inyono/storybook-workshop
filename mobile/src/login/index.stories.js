import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import Login from ".";
import LoginForm from "./Form";

storiesOf("Login", module)
  .add("interactive screen", () => <Login onSubmit={action("onSubmit")} />)
  .add("valid input", () => (
    <LoginForm
      value="inyono"
      onChange={action("onChange")}
      onSubmit={action("onSubmit")}
    />
  ))
  .add("invalid input", () => (
    <LoginForm
      error
      value=""
      onChange={action("onChange")}
      onSubmit={action("onSubmit")}
    />
  ));
