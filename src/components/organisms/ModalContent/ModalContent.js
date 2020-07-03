import React from "react";
import { Modal, Button } from "antd";
import { CreateProject, CreateTask } from "../../molecules";
import "./modalContent.styles.scss";

const ModalContent = ({
  pathname,
  visible,
  loading,
  title,
  onOk,
  onCancel,
  status,
  getData,
  onSubmitMethod
}) => {
  const options = [
    { value: "BACKLOG", name: "BACKLOG" },
    { value: "ONGOING", name: "ONGOING" },
    { value: "DONE", name: "DONE" },
    { value: "CANCELED", name: "CANCELED" }
  ];
  return (
    <div className="modalContent--container">
      <Modal visible={visible} title={title} onOk={onOk} onCancel={onCancel}>
        {pathname === "dashboard" ? (
          <CreateProject
            getData={getData}
            options={options}
            onCancel={onCancel}
            status={status}
            onSubmitMethod={onSubmitMethod}
          />
        ) : (
          <CreateTask />
        )}
      </Modal>
    </div>
  );
};

export default ModalContent;
