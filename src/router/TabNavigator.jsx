import React from "react";

// React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";

// Daditos Icons
import HomeIcon from "../../assets/icons/home.png";
import DiscoverIcon from "../../assets/icons/discover.png";
import DiceBagIcon from "../../assets/icons/diceBag.png";
import CampaignProfileIcon from "../../assets/icons/campaignProfile.png";
import ProfileIcon from "../../assets/icons/profile.png";

// Expo Icons
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DiscoverScreen from "../components/screens/discoverScreen/DiscoverScreen";
import DiceBagScreen from "../components/screens/diceBagScreen/DiceBagScreen";
import { Image } from "react-native";
import CampaignProfileScreen from "../components/screens/cpProfileScreen/CampaignProfileScreen";
import ProfileScreen from "../components/screens/profileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6741D9",
        tabBarStyle: {
          position: "absolute",
          paddingTop: 10,
          // paddingBottom: 10,
          borderWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={HomeIcon}
              style={{ width: 40, height: 40, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverScreenStack"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Image
              source={DiscoverIcon}
              style={{ width: 40, height: 40, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CampaignProfileScreenStack"
        component={CampaignProfileScreen}
        options={{
          tabBarLabel: "Campaign",
          tabBarIcon: ({ color }) => (
            <Image
              source={CampaignProfileIcon}
              style={{ width: 40, height: 40, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiceBagScreenStack"
        component={DiceBagScreen}
        options={{
          tabBarLabel: "Dice Bag",
          tabBarIcon: ({ color }) => (
            <Image
              source={DiceBagIcon}
              style={{ width: 40, height: 40, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreenStack"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={ProfileIcon}
              style={{ width: 40, height: 40, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
