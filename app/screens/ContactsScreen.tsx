import * as React from "react";

import { Text, Div } from "../components/Themed";

export default function ContactsScreen() {
  return (
    <Div flex={1} alignItems="center" justifyContent="center">
      <Text fontSize={20} fontWeight="bold">
        Contacts
      </Text>
    </Div>
  );
}
