import { Text as RNText } from "react-native";
import defaultStyles from "../config/defaultStyles";

export const AppText = ({ children, style, ...otherProps }) => {
  return <RNText style={[defaultStyles.text, style]} {...otherProps}>{children}</RNText>;
};