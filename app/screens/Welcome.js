import React, { useEffect, useRef } from "react";
import { View, ImageBackground, StyleSheet, Animated } from "react-native";

import { AppButton } from "../components/AppButton";
import { AppImage } from "../components/AppImage";
import { AppText } from "../components/AppText";
import routes from '../components/routes/routes';
import colors from "../config/colors";

const Welcome = ({ navigation }) => {

    useEffect(() => {
        fadeIn()
    })

    const fadeAnim = useRef(new Animated.Value(0)).current;

    
    const fadeIn = () => {

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    };

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
        <Animated.Text

        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim
          }
        ]}
      >
        <AppText style={styles.tagLine}>Welcome to ChatNa...</AppText>
      </Animated.Text>
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
    marginBottom:50,
  },
  tagLine: {
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default Welcome;
