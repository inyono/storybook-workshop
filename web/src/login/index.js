import React, { Component } from "react";

import LoginForm from "./Form";

class Login extends Component {
  state = { username: "" };

  isValid = () => {
    return this.state.username !== "";
  };

  submit = () => {
    this.setState({ submitted: true });

    if (!this.isValid()) {
      return;
    }

    this.props.onSubmit(this.state.username);
  };

  render() {
    return (
      <LoginForm
        error={this.state.submitted && !this.isValid()}
        onSubmit={this.submit}
        onChange={username => this.setState({ username })}
        value={this.state.username}
      />
    );
  }
}

export default Login;
