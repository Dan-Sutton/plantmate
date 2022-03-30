import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

function Notification({ name, image, place }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.itemText}>{name}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    height: 90,
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  image: {
    width: 70,
    height: 70,
    backgroundColor: "blue",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: { maxWidth: "80%" },
  circular: {
    width: 12,
    height: 12,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
  },
});
