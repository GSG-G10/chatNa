import {StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]} edges={["top", "bottom"]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view:{
    flex: 1
  }
});