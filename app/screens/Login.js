import { StyleSheet } from "react-native";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

import { SafeScreen } from "../components/SafeScreen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  VerificationForm,
} from "../components/forms";
import loginSchema from "../schema/loginSchema";
import { AppImage } from "../components/AppImage";
import useFirebase from "../hooks/useFirebase";
import { app } from "../../firebase/firebase";
import colors from "../config/colors";

export default function LoginScreen({ navigation }) {
  // const [hideRecaptcha, setHideRecaptcha] = useState(true);
  const attemptInvisibleVerification = false;
  const { options } = app;
  const authByPhone = useFirebase();

  const sendVerification = async () => {
    await authByPhone.verify();
  };

  const setPhone = (phoneNumber) => {
    authByPhone.setPhoneNumber(phoneNumber);
  };

  return (
    <SafeScreen style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        title="prove you are human!"
        cancelLabel="Close!"
        ref={authByPhone.recaptchaVerifier}
        firebaseConfig={options}
        // attemptInvisibleVerification={hideRecaptcha}
      />
      <AppImage
        imagePath={require("../assets/logo.png")}
        imageStyle={styles.logo}
      />
      {authByPhone.verificationId ? (
        <VerificationForm navigation={navigation} />
      ) : (
        <AppForm
          initialValues={{ phoneNumber: "" }}
          validationSchema={loginSchema}
          onSubmit={() => sendVerification()}
        >
          <AppFormField
            name="phoneNumber"
            placeholder="+1 999 999 9999"
            iconName="cellphone-android"
            keyboardType="phone-pad"
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            nextFunc={setPhone}
          />
          <SubmitButton title="Send Verification Code" />
        </AppForm>
      )}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
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
    marginBottom: 20,
    alignSelf: "center",
  },
});
