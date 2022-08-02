import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../screens/AllExpenses";
import RecentExpense from "../screens/RecentExpense";
import { GlobalStyles } from "../constants/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: "white",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Expences") {
            iconName = "clipboard-list-outline";
          } else if (route.name === "Recent") {
            iconName = "receipt";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Expences" component={AllExpenses} />
      <Tab.Screen name="Recent" component={RecentExpense} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
