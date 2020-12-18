import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Product from "./screens/Product";
import Emplyoees from "./screens/Emplyoees";
import Orders from "./screens/Orders"
import ProductDetails from "./screens/ProductDetials"
import EmployeeDetails from "./screens/EmployeeDetails"
import OrderDetails from "./screens/OrderDetails";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          style={{ paddingRight: 8 }}
        />
        <Stack.Screen name="Products" component={Product} />
        <Stack.Screen name="Employees" component={Emplyoees} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
        <Stack.Screen name="Employee Details" component={EmployeeDetails} />
        <Stack.Screen name="Order Details" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
