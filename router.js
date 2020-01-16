import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { customHeaderStyle } from "./constants";

import Screens from "./screens";

const AppNavigator = createStackNavigator(
  {
    // Home Route
    HomeScreen: { screen: Screens.HomeScreen }
  },

  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: customHeaderStyle
    }
  }
);

export default AppRoutes = createAppContainer(AppNavigator);