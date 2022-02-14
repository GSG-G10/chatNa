import { Image as RNImage } from "react-native";

export const AppImage = ({ imagePath, imageStyle }) => {
  return <RNImage source={imagePath} style={imageStyle} />;
};