import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function App() {
  return (
    <View styles={styles.conntainer}>
      <Image source={require("./assets/profile.jpg")} style={styles.image} />
      <View style={styles.detialContainer}>
        <Text style={{ fontWeight: 300 }}>School</Text>
        <TextInput>The lawerenceville school</TextInput>
      </View>
      <View style={styles.detialContainer}>
        <Text style={{ fontWeight: 300 }}>Email Address</Text>
        <TextInput style={{}}>danielrozar@gmail.com</TextInput>
      </View>
      <View style={styles.detialContainer}>
        <Text style={{ fontWeight: 300, color: "blue" }}>Name</Text>
        <TextInput style={{ borderBottomWidth: 1 }}>Daniel Rozar</TextInput>
      </View>
      <View style={styles.detialContainer}>
        <Text style={{ fontWeight: 300, color: "blue" }}>Nick Name</Text>
        <TextInput style={{ borderBottomWidth: 1 }}>r.daneil</TextInput>
      </View>
      <View style={styles.detialContainer}>
        <Text style={{ fontWeight: 300, color: "blue" }}>
          Emergency contact
        </Text>
        <TextInput style={{ borderBottomWidth: 1 }}>+234785885</TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update profile</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: "center",
    borderRadius: 75,
    marginTop: 100,
  },
  detialContainer: {
    flexDirection: "column",
    marginVertical: 3,
    marginLeft: 80,
    paddingHorizontal: 6,
  },
  label: {
    borderColor: "black",
    borderWidth: 1,
    flex: 2.5,
    fontSize: 20,
    paddingHorizontal: 5,
  },
  info: {
    flex: 7,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  // button: {
  //   margin: 0,
  //   justifyContent: "center",
  //   backgroundColor: "blue",
  //   borderColor: "blue",
  //   color: "green",
  //   border: 5,
  // },
});

export default App;
