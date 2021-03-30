import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  BottomTabParamList,
  ChatsTabParamList,
  ContactsTabParamList,
  SettingsTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="ChatsTab"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors[colorScheme].tint,
        style: {
          height: 60,
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 30,
          borderRadius: 35,
          paddingBottom: 10,
          borderTopWidth: 0,
          position: "absolute",
          paddingHorizontal: 20,
          backgroundColor: Colors[colorScheme].tabBarBackground,
        },
      }}
    >
      <BottomTab.Screen
        name="ChatsTab"
        component={ChatsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-chatbubbles" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ContactsTab"
        component={ContactsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-people" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsTab"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-settings" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={25} style={{ marginBottom: -5 }} {...props} />;
}

const ChatsStack = createStackNavigator<ChatsTabParamList>();

function ChatsNavigator() {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ headerShown: false }}
      />
    </ChatsStack.Navigator>
  );
}

const ContactsStack = createStackNavigator<ContactsTabParamList>();

function ContactsNavigator() {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{ headerShown: false }}
      />
    </ContactsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsTabParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
}
