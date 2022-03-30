import { StyleSheet, Button, View, Text } from "react-native";
import Notification from "../components/Notification";

function Feed({ route }) {
  return (
    <View style={styles.container}>
      <Notification text={"Spider Plant"} />
    </View>
  );
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D794E",
    alignItems: "center",
    paddingTop: 20,
  },
});
