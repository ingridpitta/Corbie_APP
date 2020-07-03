import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const dateFormat = "DD/MM/YYYY";

const DateInput = ({
  name,
  label,
  placeholder,
  value,
  isLoading,
  onChange,
  handleBlur,
  setFieldValue
}) => {
  const onChangeDate = date => {
    setFieldValue(name, date);
  };

  return (
    <div>
      <span>{label}</span>
      <DatePicker
        name={name}
        placeholder={placeholder}
        format={dateFormat}
        value={value}
        onChange={onChangeDate}
        defaultValue={moment(value, dateFormat)}
        showToday
      />
    </div>
  );
};

export default DateInput;
