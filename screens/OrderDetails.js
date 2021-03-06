import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function OrderDetails({ route }) {
  const details = route.params.data;
  return (
    <View style={styles.inputContainer}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontStyle: "italic",
          fontWeight: "bold",
          paddingVertical: 5,
        }}
      >
        {details.name}
      </Text>
      <View>
        <Image
          style={{ width: 400, height: 300 }}
          source={require("../assets/cam.jpg")}
        />
      </View>
      <View style={styles.custom}>
        <Text style={styles.textStyle}>{"Company: " + details.Company}</Text>
        <Text style={styles.textStyle}>{"Location: " + details.location}</Text>
        <Text style={styles.textStyle}>
          {"Description: " + details.Description}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
  },
  custom: {
    width: "90%",
    height: "20%",
    padding: 8,
    backgroundColor: "skyblue",
    marginVertical: 5,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    paddingVertical: 5,
  },
});
