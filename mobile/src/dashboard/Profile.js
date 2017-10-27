import * as NB from "native-base";
import React from "react";

const Profile = ({ username, onLogout }) => (
  <NB.Container>
    <NB.H2>Profile</NB.H2>
    <NB.Button block style={{ margin: 15 }} onPress={() => onLogout()} danger>
      <NB.Text>Log out</NB.Text>
    </NB.Button>
  </NB.Container>
);

export default Profile;
