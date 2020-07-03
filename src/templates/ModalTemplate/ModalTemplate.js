import React from "react";
import "./modalTemplate.styles.scss";

const ModalTemplate = ({ children }) => {
  return <div className="modalTemplate--container">{children}</div>;
};

export default ModalTemplate;
