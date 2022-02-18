import {StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={style} edges={["top", "bottom"]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view:{
    flex: 1
  }
});