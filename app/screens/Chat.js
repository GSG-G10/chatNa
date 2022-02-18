import React from "react";
import { StyleSheet } from "react-native";
import { SafeScreen } from "../components/SafeScreen";

import { AppText } from "../components/AppText";
import colors from "../config/colors";
function ChatScreen(props) {

  return (
    <SafeScreen style={styles.container}>
      <AppText styles={styles.text}> Hi Chat </AppText>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000',
    flex:1,
  },
  text:{
    color:"#fff"
  }
});

export default ChatScreen;
