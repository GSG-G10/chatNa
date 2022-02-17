import * as Yup from "yup";

export default loginSchema = Yup.object().shape({
  phoneNumber: Yup.string().required().min(10).label("Phone Number"),
});
