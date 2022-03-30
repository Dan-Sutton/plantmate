import {
  StyleSheet,
  Button,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Notification from "../components/Notification";
import { data } from "../data";

function Feed({ route }) {
  return (
    <>
      <ScrollView style={{ backgroundColor: "#4D794E" }}>
        <View style={styles.container}>
          <View style={styles.items}>
            {data.map((item, index) => {
              return (
                <Notification
                  key={index}
                  name={item.name}
                  image={item.image}
                  place={item.place}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
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
