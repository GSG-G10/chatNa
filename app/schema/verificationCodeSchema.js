import * as Yup from "yup";

export default verificationSchema = Yup.object().shape({
  codeVerification: Yup.string()
    .required()
    .length(6)
    .label("Verification Code"),
});
