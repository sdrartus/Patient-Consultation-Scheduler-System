import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Button,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function started({ navigation }) {
  return (
    <View>
      <ImageBackground source={require("./assets/4.jpg")}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: "center",
  },
  StartText: {
    fontStyle: "normal",
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    writingDirection: "ltr",
    padding: 10,
    backgroundColor: "#000000c5",
    color: "white",
  },
  Btn: {
    alignSelf: "auto",
    alignItems: "center",
    padding: 15,
    height: 50,
    backgroundColor: "#386dff",
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default started;
