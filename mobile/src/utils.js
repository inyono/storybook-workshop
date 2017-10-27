import { AppLoading, Font } from "expo";
import { Root } from "native-base";
import React, { Component } from "react";

export const loadFonts = C => {
  class LoadFontsComponent extends Component {
    state = { fontsLoaded: false };

    loadFontsAsync() {
      return Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
    }

    render() {
      if (!this.state.fontsLoaded) {
        return (
          <AppLoading
            startAsync={this.loadFontsAsync}
            onFinish={() => this.setState({ fontsLoaded: true })}
            onError={console.warn}
          />
        );
      }

      return (
        <Root>
          <C {...this.props} />
        </Root>
      );
    }
  }

  return LoadFontsComponent;
};
