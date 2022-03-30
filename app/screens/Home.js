import { StyleSheet, Button, View, Text } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      {/* welcome content */}
      <View style={styles.content}>
        {/* Title card */}
        <View style={styles.textcontainer}>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.title}>Plant Mate</Text>
        </View>
        {/* Text Body */}
        <View>
          <Text style={styles.text}>
            A convenient way to track when your plants need watering, so that
            they never go under-watered again!
          </Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.login}>
            <Button
              title="Login"
              color="#4D794E"
              onPress={() => {
                navigation.navigate("Feed", { text: 'this is a test!' });
              }}
            />
          </View>

          <Button
            title="Sign Up"
            color="#F0B440"
            onPress={() => alert("You Clicked Login")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D794E",
    alignItems: "center",
  },
  navText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    marginTop: 30,
    width: "80%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 15,
  },
  textcontainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 25,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  buttons: {
    marginTop: 60,
    paddingHorizontal: 60,
    height: 150,
  },
  login: {
    marginBottom: 30,
  },
});
