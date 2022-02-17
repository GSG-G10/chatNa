import React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import useFirebase from "../hooks/useFirebase";
import { app } from "../../firebase/firebase";
export default function LoginScreen() {

  const { options } = app;
  const attemptInvisibleVerification = false;
  const authByPhone = useFirebase();

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={authByPhone.recaptchaVerifier}
        firebaseConfig={options}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => authByPhone.setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!authByPhone.phoneNumber}
        onPress={authByPhone.verify}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!authByPhone.verificationId}
        placeholder="123456"
        onChangeText={authByPhone.setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!authByPhone.verificationId}
        onPress={authByPhone.confirmVerification}
      />
      {authByPhone.message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => authByPhone.setShowMessage(undefined)}
        >
          <Text
            style={{
              color: authByPhone.message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {authByPhone.message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
}
