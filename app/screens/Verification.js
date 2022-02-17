import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeScreen } from "../components/SafeScreen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import verificationSchema from "../schema/verificationCodeSchema";

import { AppImage } from "../components/AppImage";
import useFirebase from "../hooks/useFirebase";
import colors from "../config/colors";


export default function VerificationScreen(){
  const authByPhone = useFirebase();

  const handleSubmit = async () => {
    await authByPhone.confirmVerification();
    // if (authByPhone.verificationId) {
    //   // move to verification code form
    // }
  };

  const setCodeVerification = (code) => {
    authByPhone.setVerificationCode(code);
  };

  return (
    <SafeScreen style={styles.container}>
      <AppImage
        imagePath={require("../assets/logo.png")}
        imageStyle={styles.logo}
      />
      <AppForm
        initialValues={{ verificationCode: "" }}
        validationSchema={verificationSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name="codeVerification"
          placeholder="Verification Code "
          iconName="message-cog-outline"
          keyboardType="phone-pad"
          autoCompleteType="tel"
          nextFunc={setCodeVerification}
        />
        <SubmitButton title="LOGIN" />
      </AppForm>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  logo: {
    width: 85,
    height: 85,
    marginTop: 50,
    marginBottom: 60,
    alignSelf: "center",
  },
});
