import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { homeScreenStyles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CampaignCard from "../../common/CampaignCard/CampaignCard";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[homeScreenStyles.container, { marginTop: top }]}>
      <TouchableOpacity>
        <CampaignCard />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
