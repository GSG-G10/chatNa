import { useState, useRef } from "react";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const useFirebase = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [verificationId, setVerificationId] = useState();
  const [message, showMessage] = useState();
  const recaptchaVerifier = useRef(null);

  const confirmVerification = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  const verify = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return {
    confirmVerification,
    verify,
    setPhoneNumber,
    setVerificationCode,
    showMessage,
    phoneNumber,
    verificationCode,
    verificationId,
    message,
    recaptchaVerifier,
  };
};
export default useFirebase;
