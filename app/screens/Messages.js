import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  ItemDeleteActions,
  ItemSeparator,
  ListItem,
} from "../components/lists";
import { SafeScreen } from "../components/SafeScreen";
import colors from "../config/colors";

const Messages = () => {
  const data = [
    {
      id: 1,
      title: "nizar",
      description: "Heey",
      image: require("../assets/background.jpeg"),
    },
    {
      id: 2,
      title: "hany",
      description: "Tschuss",
      image: require("../assets/background.jpeg"),
    },
  ];
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <SafeScreen>
      <FlatList
        style={styles.messages}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            imagePath={item.image}
            onPress={() => console.log("item Selected", item)}
            renderRightActions={() => (
              <ItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "hany",
              description: "Tschuss",
              image: require("../assets/logo.png"),
            },
          ])
        }
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  messages: {
    backgroundColor: colors.white,
  },
});

export default Messages;
