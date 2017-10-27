import React from "react";
import { Route } from "react-router-dom";
import { Segment, Menu } from "semantic-ui-react";

import games from "../games";
import Dashboard from "./Dashboard";
import Game from "./Game";
import Profile from "./Profile";

const DashboardContainer = ({ history, match, location, logout }) => {
  const { pathname } = location;
  const { username } = match.params;
  const dashboardUrl = match.url;

  //     </NB.Content>
  //     <NB.Footer>
  //       <NB.FooterTab>
  //         <NB.Button
  //           vertical
  //           onPress={() => history.push(match.url)}
  //           active={pathname === match.url}
  //         >
  //           <NB.Icon name="apps" />
  //           <NB.Text>Dashboard</NB.Text>
  //         </NB.Button>
  //         <NB.Button
  //           vertical
  //           onPress={() => history.push(`${match.url}/profile`)}
  //           active={pathname === `${match.url}/profile`}
  //         >
  //           <NB.Icon name="person" />
  //           <NB.Text>Profile</NB.Text>
  //         </NB.Button>
  //       </NB.FooterTab>
  //     </NB.Footer>
  //   </NB.Container>
  // );

  return (
    <div>
      <Menu inverted>
        <Menu.Item
          name="Dashboard"
          active={pathname === match.url}
          onClick={() => history.push(match.url)}
        />
        <Menu.Item
          name="Profile"
          active={pathname === `${match.url}/profile`}
          onClick={() => history.push(`${match.url}/profile`)}
        />
      </Menu>
      <Route
        exact
        path={match.url}
        render={() => (
          <Dashboard
            username={username}
            games={games}
            gotoGame={id => history.push(`${match.url}/game/${id}`)}
          />
        )}
      />
      <Route
        path={`${match.url}/profile`}
        render={() => <Profile username={username} onLogout={logout} />}
      />
      <Route
        path={`${match.url}/game/:id`}
        render={({ match }) => {
          const { id } = match.params;
          const game = games[id];

          return (
            <Game
              {...game}
              onGameOver={() => {
                // NB.Toast.show({
                //   text: "You solved it!",
                //   position: "bottom",
                //   buttonText: "Okay",
                //   type: "success",
                //   duration: 2500
                // });
                setTimeout(() => history.push(dashboardUrl), 2500);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default DashboardContainer;
