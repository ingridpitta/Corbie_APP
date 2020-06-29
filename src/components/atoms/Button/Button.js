import React from "react";
import { Button as ButtonBase } from "antd";
import "./button.styles.scss";

const Button = ({ isLoading, children, method, type }) => (
  <ButtonBase
    type="primary"
    loading={isLoading}
    htmlType={type || "Button"}
    onClick={() => method && method()}
  >
    {children}
  </ButtonBase>
);

export default Button;
