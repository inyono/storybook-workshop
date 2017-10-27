import React from "react";
import { Header, Button } from "semantic-ui-react";

const Profile = ({ username, onLogout }) => (
  <div>
    <Header>Profile</Header>
    <Button onClick={() => onLogout()}>Log out</Button>
  </div>
);

export default Profile;
