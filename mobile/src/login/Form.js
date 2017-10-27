import React, { Component } from "react";
import * as NB from "native-base";

const LoginForm = ({ error, value, onChange, onSubmit }) => (
  <NB.Container>
    <NB.Header>
      <NB.Left />
      <NB.Body>
        <NB.Title>Storybook</NB.Title>
      </NB.Body>
      <NB.Right onPress={onSubmit}>
        <NB.Button transparent>
          <NB.Icon name="arrow-forward" />
        </NB.Button>
      </NB.Right>
    </NB.Header>
    <NB.Content>
      <NB.Form>
        <NB.Item last error={error}>
          <NB.Icon active name="person" style={{ paddingTop: 5 }} />
          <NB.Input
            placeholder="Username"
            onChangeText={onChange}
            value={value}
          />
          {error && <NB.Icon name="alert" />}
        </NB.Item>
        <NB.Button
          block
          style={{ margin: 15 }}
          onPress={onSubmit}
          disabled={error}
        >
          <NB.Text>Submit</NB.Text>
        </NB.Button>
      </NB.Form>
    </NB.Content>
  </NB.Container>
);

export default LoginForm;
