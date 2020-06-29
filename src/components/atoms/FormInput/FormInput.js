import React from "react";
import { Form, Input as InputAntd } from "antd";
import InputWithMask from "react-input-mask";
import "./formInput.styles.scss";

const FormInput = ({
  name,
  label,
  mask,
  value,
  type,
  isLoading,
  handleChange,
  handleBlur,
  placeholder,
  error,
  touched
}) => {
  const hasMask = !!mask;
  const hasError = !!error;
  const hasTouched = touched;

  return (
    <Form.Item
      name={name}
      label={label}
      validateStatus={hasError && hasTouched && "error"}
      help={hasError && hasTouched && error}
    >
      {hasMask ? (
        <InputWithMask
          className="ant-input"
          mask={mask}
          maskChar={null}
          initialValues={value}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      ) : (
        <InputAntd
          initialValues={value}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          type={type || "text"}
        />
      )}
    </Form.Item>
  );
};

export default FormInput;
