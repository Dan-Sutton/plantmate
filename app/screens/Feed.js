import {
  StyleSheet,
  Button,
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import Notification from "../components/Notification";

function Feed({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Notification text={"Spider Plant"} />
        <Notification text={"Devil's Ivy"} />
      </View>
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
  items: {
    width: "100%",
    alignItems: "center",
  },
});
