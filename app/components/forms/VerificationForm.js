import React from "react";
import verificationSchema from "../../schema/verificationCodeSchema";
import { AppForm, AppFormField, SubmitButton } from "./";
import useFirebase from "../../hooks/useFirebase";
import routes from "../routes/routes";

export default function VerificationForm({ navigation }) {
  const authByPhone = useFirebase();

  const handleVerification = async () => {
    await authByPhone.confirmVerification();
    navigation.navigate(routes.CHAT);
  };

  const setCodeVerification = (code) => {
    authByPhone.setVerificationCode(code);
  };
  return (
    <AppForm
      initialValues={{ codeVerification: "" }}
      validationSchema={verificationSchema}
      onSubmit={handleVerification}
    >
      <AppFormField
        name="codeVerification"
        placeholder="Verification Code "
        iconName="message-cog-outline"
        keyboardType="phone-pad"
        autoCompleteType="tel"
        nextFunc={setCodeVerification}
      />
      <SubmitButton title="Verify " />
    </AppForm>
  );
}
