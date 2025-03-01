import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import Runaterra from "../../../../assets/campaignImages/runaterra.png";

const campaigns = [
  { id: "1", title: "Runaterra", creator: "borisnotes" },
  { id: "2", title: "Más allá de Thandoria", creator: "patitadegato" },
  // Add more campaigns as needed
];

const CampaignCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar campanas"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredCampaigns}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
            <Text>{item.creator}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
  card: {
    width: "100%",
  },
});

export default CampaignCard;
