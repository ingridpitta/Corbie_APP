import React from "react";
import { InputNumber as InputValorMaster } from "antd";

const InputValor = ({ name, label, placeholder, value, setFieldValue }) => {
  const onChangeValor = valor => {
    setFieldValue(name, valor);
  };
  return (
    <div>
      <span>{label}</span>
      <InputValorMaster
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValor}
        defaultValue={0}
        min={0}
        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        decimalSeparator={"."}
      />
    </div>
  );
};
export default InputValor;
