import React from "react";
import { Modal, Button } from "antd";
import { CreateProject } from "../../molecules";
import "./modalContent.styles.scss";

const ModalContent = ({
  pathname,
  visible,
  loading,
  title,
  onOk,
  onCancel
}) => {
  const options = [
    { value: "BACKLOG", displayValue: "BACKLOG" },
    { value: "ONGOING", displayValue: "ONGOING" },
    { value: "DONE", displayValue: "DONE" },
    { value: "CANCELED", displayValue: "CANCELED" }
  ];
  return (
    <div className="modalContent--container">
      <Modal visible={visible} title={title} onOk={onOk} onCancel={onCancel}>
        {pathname === "dashboard" ? (
          <CreateProject onCancel={onCancel} options={options} />
        ) : (
          <h1>TASKS</h1>
        )}
      </Modal>
    </div>
  );
};

export default ModalContent;
