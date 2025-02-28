import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CampaignProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top }}>
      <Text>CampaignProfileScreen</Text>
    </View>
  );
};

export default CampaignProfileScreen;
