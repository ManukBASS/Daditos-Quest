import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DiceBagScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top }}>
      <Text>DiceBagScreen</Text>
    </View>
  );
};

export default DiceBagScreen;
