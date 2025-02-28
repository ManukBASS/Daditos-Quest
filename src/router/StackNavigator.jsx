import React from "react";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Components
import HomeScreen from "../components/screens/homeScreen/HomeScreen";
import DiscoverScreen from "../components/screens/discoverScreen/DiscoverScreen";
import DiceBagScreen from "../components/screens/diceBagScreen/DiceBagScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: "white",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="DiceBag" component={DiceBagScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
