import React from "react";
import { InputNumber as InputNumberMaster } from "antd";

const InputNumber = ({
  name,
  label,
  placeholder,
  value,
  setFieldValue
}) => {
  const onChangeNumber = number => {
    setFieldValue(name, number);
  };
  return (
    <div>
      <span>{label}</span>
      <InputNumberMaster
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeNumber}
        defaultValue={0}
        min={0}
      />
    </div>
  );
};
export default InputNumber;
