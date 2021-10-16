import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { AppointmentCreate } from "../screens/AppointmentCreate";

const { Navigator, Screen } = createStackNavigator();

import { theme } from "../global/styles/theme";

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        presentation: "modal",
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Screen name="Home" component={Home} />

      <Screen name="AppointmentDetails" component={AppointmentDetails} />

      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
}
