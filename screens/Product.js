import React, { useState } from "react";
import { View ,StyleSheet,Text, TouchableOpacity } from "react-native";
export default function Product({ navigation, route }) {
  const data=route.params.data;
  return (
    <View style={styles.inputContainer}>
      <View>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 30,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          List of Products
        </Text>
      </View>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.custom}
          onPress={() =>
            navigation.navigate("Product Details", {
              details: item,
            })
          }
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
              paddingBottom: 3,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              paddingBottom: 3,
            }}
          >
            {"Price: " + item.price}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
  },
  custom: {
    width: "50%",
    height: "8%",
    padding: 8,
    backgroundColor: "skyblue",
    marginVertical: 5,
  },
});
