import { useFormikContext } from "formik";

import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage";

export const AppFormField = ({ name, width, nextFunc, ...otherProps }) => {
  const { setFieldTouched, values, setFieldValue, touched, errors } =
    useFormikContext();

    const checkErrorsBeforeInvoke = (text) => {
      setFieldValue(name, text);
        nextFunc(text) 
    }
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => checkErrorsBeforeInvoke(text)}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};
