import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginForm = ({ error, value, onChange, onSubmit }) => (
  <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Log in
      </Header>
      <Form size="large">
        <Segment>
          <Form.Input
            icon="user"
            iconPosition="left"
            onChange={e => onChange(e.target.value)}
            value={value}
            label="Username"
            placeholder="username"
            error={error}
          />

          <Button onClick={onSubmit} fluid size="large" disabled={error}>
            Submit
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
