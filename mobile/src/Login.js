import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Form,
  Item,
  Input,
  Body,
  Title,
  Button,
  Text,
  Icon,
  Toast
} from "native-base";

class Login extends Component {
  state = { username: "" };

  isValid = () => {
    return this.state.username !== "";
  };

  submit = () => {
    this.setState({ submitted: true });

    if (!this.isValid()) {
      Toast.show({
        text: "Please pick a username",
        position: "bottom",
        buttonText: "Okay"
      });
      return;
    }

    this.props.onSubmit(this.state.username);
  };

  render() {
    const hasError = this.state.submitted && !this.isValid();

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Storybook</Title>
          </Body>
          <Right onPress={this.submit}>
            <Button transparent>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item last error={hasError}>
              <Icon active name="person" style={{ paddingTop: 5 }} />
              <Input
                placeholder="Username"
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
              {hasError && <Icon name="alert" />}
            </Item>
            <Button block style={{ margin: 15 }} onPress={this.submit}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
