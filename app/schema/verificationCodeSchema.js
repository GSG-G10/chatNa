import * as Yup from "yup";

export default loginSchema = Yup.object().shape({
  verificationCode: Yup.string()
    .required()
    .length(6)
    .label("Verification Code"),
});
