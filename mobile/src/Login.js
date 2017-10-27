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
  Icon
} from "native-base";

const Login = () => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>Storybook</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="arrow-forward" />
        </Button>
      </Right>
    </Header>
    <Content>
      <Form>
        <Item last>
          <Icon active name='person' style={{ paddingTop: 5 }} />
          <Input placeholder="Username" />
        </Item>
        <Button block style={{ margin: 15 }}>
          <Text>Submit</Text>
        </Button>
      </Form>
    </Content>
  </Container>
);

export default Login;
