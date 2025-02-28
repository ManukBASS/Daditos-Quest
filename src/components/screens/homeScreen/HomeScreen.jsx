import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { homeScreenStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[homeScreenStyles.container, { marginTop: top }]}>
      <TouchableOpacity>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
