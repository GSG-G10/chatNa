import { useState, useRef } from "react";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import colors from "../config/colors";

const useFirebase = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [verificationId, setVerificationId] = useState();
  const [message, setShowMessage] = useState();
  const recaptchaVerifier = useRef(null);

  const confirmVerification = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      setShowMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      setShowMessage({ text: `Error: ${err.message}`, color: colors.danger });
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
      setShowMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      setShowMessage({ text: `Error: ${err.message}`, color:colors.danger });
    }
  };

  return {
    confirmVerification,
    verify,
    setPhoneNumber,
    setVerificationCode,
    setShowMessage,
    phoneNumber,
    verificationCode,
    verificationId,
    message,
    recaptchaVerifier,
  };
};
export default useFirebase;
