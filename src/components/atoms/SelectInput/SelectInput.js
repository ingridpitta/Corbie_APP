import React from 'react';
import { Select  } from 'antd';


const SelectInput = ({value, displayValue, handleChange, filter, name, label, placeholder, isLoading, onChange, handleBlur, setFieldValue, data, ...props}) => {

  return (
    <div>
      <label htmlFor={value}>{displayValue}</label>
      <Select
        style={{ width: 200 }}
        defaultActiveFirstOption
        placeholder={placeholder}
        onChange={handleChange}
      >
        {data.map(option => (
          <Select.Option value={option.value} displayValue={option.name}>
            {option.value}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
export default SelectInput;