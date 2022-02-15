import React, { useState, useRef } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import authentication from "../../firebase/firebase";

function LoginScreen(props) {
  const btnRef = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [confirmationResult, setConfirmationResult] = useState();
  const [recaptchaVerifier, setRecapcharVerifier] = useState();
  // for Request otp
  const generateRecaptcha = () => {
    let recaptchaVerifierInstance = new RecaptchaVerifier(
      btnRef,
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      authentication
    );
    setRecapcharVerifier(recaptchaVerifierInstance);
  };

  const singIn = async () => {
    console.log("Sign in process");
    generateRecaptcha();
    try {
      const confirmationResultInstance = await signInWithPhoneNumber(
        authentication,
        phoneNumber,
        recaptchaVerifier
      );
      console.log(confirmationResultInstance);
      setConfirmationResult(confirmationResultInstance);
    } catch (error) {
      console.log(error);
    }
  };
  // *********************************************
  //  for verfiy
  const verification = async () => {
    console.log("verification process");
    try {
      const { user } = await confirmationResult.confirm(OTP);
      console.log("user", user);
    } catch (error) {
      console.log(error);
    }
  };

  // *******************************************
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Please Enter your naumber </Text>
      <TextInput
        onChangeText={(text) => setPhoneNumber(text)}
        style={styles.textInputStyle}
      />
      <Button ref={btnRef} title="Add Number" onPress={singIn} />

      <Text style={styles.textStyle}> Please Enter your OTP </Text>
      <TextInput
        onChangeText={(text) => setOTP(text)}
        style={styles.textInputStyle}
      />
      <Button ref={btnRef} onPress={verification} title="Add OTP" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 30,
  },
  textStyle: {
    color: "#fff",
  },
  textInputStyle: {
    backgroundColor: "#fff",
    marginVertical: 12,
    padding: 8,
    borderRadius: 7,
  },
});

export default LoginScreen;
