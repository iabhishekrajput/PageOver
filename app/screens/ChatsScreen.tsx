import * as React from "react";
import Constants from "expo-constants";
import { Avatar, Badge, Icon, Input } from "react-native-magnus";

import { Div, Text } from "../components/Themed";
import ChatCard from "../components/ChatCard";

export default function TabOneScreen() {
  return (
    <Div px={25} flex={1}>
      <Div
        mt={Constants.statusBarHeight + 12}
        row
        px={5}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Div>
          <Div row>
            <Text fontSize="5xl" mr={5}>
              Hi
            </Text>
            <Text fontSize="5xl" fontWeight="bold">
              Abhishek
            </Text>
            <Text fontSize="5xl" mr={5}>
              !
            </Text>
          </Div>
          <Text fontSize="lg" my={4}>
            Available
          </Text>
        </Div>
        <Badge top={36} bottom={0} left={36} right={0}>
          <Avatar
            shadow={1}
            source={{ uri: "https://i.pravatar.cc/300?img=56" }}
          />
        </Badge>
      </Div>
      <Div my={30}>
        <Input
          py={15}
          px={25}
          bg="white"
          rounded={30}
          placeholder="Search Chats"
          prefix={<Icon name="search" color="gray900" fontFamily="Feather" />}
        />
      </Div>
      <Div>
        <ChatCard />
      </Div>
    </Div>
  );
}
