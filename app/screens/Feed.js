import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import Notification from "../components/Notification";
import { data } from "../data";
import button from "../images/button.png";
import FormContent from "../components/FormContent";

function Feed({ route }) {
  const [notData, setData] = useState(data);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function deleteItem(id) {
    const notDataCopy = [...notData];
    const index = notDataCopy.findIndex((item) => {
      return item.id === id;
    });
    notDataCopy.splice(index, 1);
    setData(notDataCopy);
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: "#4D794E" }}>
        <View style={styles.container}>
          <View style={styles.items}>
            {notData.map((item, index) => {
              return (
                <Notification
                  id={item.id}
                  key={index}
                  name={item.name}
                  image={item.image}
                  place={item.place}
                  deleteItem={deleteItem}
                />
              );
            })}
          </View>
          <TouchableOpacity onPress={toggleModal} style={styles.add}>
            <Image style={styles.button} source={button}></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal backdropOpacity={0} isVisible={isModalVisible}>
        <View style={styles.modal}>
          <FormContent />

          <Button title="CANCEL" onPress={toggleModal} />
          <Button title="SUBMIT" onPress={toggleModal} />
        </View>
      </Modal>
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
  add: {
    backgroundColor: "#F0B440",
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 80,
    width: 80,
    opacity: 0.8,
  },

  modal: {
    borderRadius: 15,
    padding: 40,
    flex: 1,
    backgroundColor: "white",
  },
});
