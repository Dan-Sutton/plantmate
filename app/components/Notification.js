import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { data } from "../data";

function Notification({ id, name, image, place, deleteItem }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textBody}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.place}>{place}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          deleteItem(id);
        }}
      >
        <View style={styles.circular}></View>
      </TouchableOpacity>
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
    borderRadius: 50,
    marginRight: 15,
  },
  textBody: {},
  name: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  circular: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
  },
  place: {},
});
