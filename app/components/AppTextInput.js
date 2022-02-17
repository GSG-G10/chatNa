import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/defaultStyles";

export const AppTextInput = ({ iconName, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.grey,
    borderRadius: 35,
  },
  icon: {
    marginRight: 10,
  },
});