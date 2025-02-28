import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top }}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
