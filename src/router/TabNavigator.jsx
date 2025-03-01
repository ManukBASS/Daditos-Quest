import React from "react";

// React Native
import { Image } from "react-native";

// React Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Daditos Icons
// import HomeIcon from "../../assets/icons/home.png";
// import DiscoverIcon from "../../assets/icons/discover.png";
// import DiceBagIcon from "../../assets/icons/diceBag.png";
// import CampaignProfileIcon from "../../assets/icons/campaignProfile.png";
// import ProfileIcon from "../../assets/icons/profile.png";

// SVG Icons
import HomeIconSVG from "../../assets/icons/homeIcon.svg";
import DiscoverIconSVG from "../../assets/icons/discoverIcon.svg";
import DiceBagIconSVG from "../../assets/icons/diceBagIcon.svg";
import CampaignProfileIconSVG from "../../assets/icons/campaignProfileIcon.svg";
import ProfileIconSVG from "../../assets/icons/profileIcon.svg";

// Components
import StackNavigator from "./StackNavigator";
import DiscoverScreen from "../components/screens/discoverScreen/DiscoverScreen";
import DiceBagScreen from "../components/screens/diceBagScreen/DiceBagScreen";
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
          marginInline: 30,
          marginBottom: 30,
          borderRadius: 20,
          padding: 20,
          borderWidth: 0,
          elevation: 3,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ color }) => (
            <HomeIconSVG width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverScreenStack"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ color }) => (
            <DiscoverIconSVG width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CampaignProfileScreenStack"
        component={CampaignProfileScreen}
        options={{
          tabBarLabel: "Campaign",
          tabBarActiveBackgroundColor: "#6741D9",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ color }) => (
            <CampaignProfileIconSVG width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DiceBagScreenStack"
        component={DiceBagScreen}
        options={{
          tabBarLabel: "Dice Bag",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ color }) => (
            <DiceBagIconSVG width={50} height={50} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreenStack"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ color }) => (
            <ProfileIconSVG width={50} height={50} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
