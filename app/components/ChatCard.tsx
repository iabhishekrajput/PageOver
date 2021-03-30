import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Avatar } from "react-native-magnus";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Div, Text } from "./Themed";

export default function ChatCard() {
  const colorScheme = useColorScheme();

  return (
    <Div row my={4} alignItems="center">
      <Div>
        <Avatar
          size={54}
          mr={10}
          bg={Colors[colorScheme].tabIconDefault}
          color={Colors[colorScheme].text}
          fontSize={24}
          fontWeight={"normal"}
        >
          AS
        </Avatar>
      </Div>
      <Div flex={1}>
        <Div row my={1} alignItems="center" justifyContent="space-between">
          <Div>
            <Text fontSize={16} fontWeight="bold">
              Abhishek Singh
            </Text>
          </Div>
          <Div>
            <Text color="grey">3/16/21</Text>
          </Div>
        </Div>
        <Div row alignItems="center">
          <Div mr={4}>
            <Ionicons
              name="checkmark-done"
              size={16}
              color={Colors[colorScheme].text}
            />
          </Div>
          <Div>
            <Text color="grey">Hey 👋</Text>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
