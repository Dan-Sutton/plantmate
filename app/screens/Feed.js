import { StyleSheet, Button, View, Text } from "react-native";

function Feed({route}) {
  const { text } = route.params;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default Feed;
