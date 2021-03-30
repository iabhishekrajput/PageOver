import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Chats: {
            screens: {
              ChatsScreen: "chats",
            },
          },
          Contacts: {
            screens: {
              ContactsScreen: "contacts",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
