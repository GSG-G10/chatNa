import { useFormikContext } from "formik";

import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage";

export const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, values, setFieldValue, touched, errors } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};