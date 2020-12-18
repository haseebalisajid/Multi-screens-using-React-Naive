import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";


export default function Home({ navigation, route }) {
  const products = [
    {
      name: "product 1",
      price: "2000",
      location: "Islamabad",
      Description: "This is product 1 of dummy Data for products Screen",
    },
    {
      name: "product 2",
      price: "4000",
      location: "Karachi",
      Description: "This is product 2 of dummy Data for products Screen",
    },
    {
      name: "product 3",
      price: "6000",
      location: "Lahore",
      Description: "This is product 3 of dummy Data for products Screen",
    },
  ];
  const emp = [
    {
      name: "Haseeb Ali",
      Role: "Student",
      location: "Islamabad",
      Description: "Student of BSCS-6B in COMSATS ISB.",
    },
    {
      name: "Muhammad Hamza",
      Role: "Student",
      location: "Islamabad",
      Description: "Student of BSCS-6B in COMSATS ISB.",
    },
    {
      name: "Suhaib Khawaja",
      Role: "Student",
      location: "Islamabad",
      Description: "Student of BSCS-6B in COMSATS ISB.",
    },
  ];
    const orders = [
      {
        name: "Order 1",
        Company: "Draz",
        location: "Islamabad",
        Description: "Order 1 from Draz.",
      },
      {
        name: "Order 2",
        Company: "Amazon",
        location: "Karachi",
        Description: "Order 2 from Amazon.",
      },
      {
        name: "Order 3",
        Company: "Ali Express",
        location: "Karachi",
        Description: "Order 3 from Ali Express.",
      },
    ];
  return (
    <View style={styles.inputContainer}>
      <Text style={{ marginVertical:10,fontSize: 30, textAlign: "center", fontStyle: "italic",fontWeight:"bold" }}>
        Management System
      </Text>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() =>
          navigation.navigate("Products", {
            data: products,
          })
        }
      >
        <Text
          style={{ fontSize: 20, textAlign: "center", fontStyle: "italic" }}
        >
          Manage Products
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate("Employees",{
          data:emp
        })}
      >
        <Text
          style={{ fontSize: 20, textAlign: "center", fontStyle: "italic" }}
        >
          Manage Employess
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate("Orders",{
          data:orders
        })}
      >
        <Text
          style={{ fontSize: 20, textAlign: "center", fontStyle: "italic" }}
        >
          Manage Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton:{
    justifyContent:"center",
    alignItems:"center",
    width:"60%",
    height:"9%",
    padding:20,
    backgroundColor:"skyblue",
    marginVertical:5
  }
});
