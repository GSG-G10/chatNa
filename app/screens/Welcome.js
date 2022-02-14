import { View, ImageBackground, StyleSheet } from "react-native";

import colors from "../config/colors";

import { AppButton } from "../components/AppButton";
import { AppImage } from "../components/AppImage";
import { AppText } from "../components/AppText";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={12}
      source={require("../assets/background.jpeg")}
      style={styles.imageContainer}
    >
      <View style={styles.logoContainer}>
        <AppImage
          imageStyle={styles.imageLogo}
          imagePath={require("../assets/logo.png")}
        />
        <AppText style={styles.tagLine}>Welcome to ChatNa</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Sign Up"
          style={styles.loginButton}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
    justifyContent: "space-between",
    height: "50%",
  },
  imageLogo: {
    height: 120,
    width: 120,
  },
  buttonContainer: {
    width: "90%",
  },

  loginButton: {
    backgroundColor: colors.primary,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default Welcome;
