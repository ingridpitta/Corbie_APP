import React, { useState } from "react";
import { Formik } from "formik";
import { FormInput, DatePicker } from "../../atoms";
import { Input, InputNumber, Select, Button } from "antd";
import CreateProjectSchema from "./CreateProject.schema";
import ApiService from "../../../api/Service";
import "./createProject.styles.scss";
import "antd/dist/antd.css";

const CreateProject = ({ onCancel, options }) => {
  const [status, setStatus] = useState("");
  const initialState = {
    title: "",
    description: "",
    hourPrice: "",
    duration: "",
    cost: "",
    status: "",
    creationDate: "",
    dueDate: ""
  };

  const getData = (values, data) => {
    console.log({ values, status, data });
    setStatus(data.value);
  };

  const onSubmitMethod = async (values, actions) => {
    const data = { ...values, status: status };
    await ApiService.createProject(data);

    actions.setSubmitting(false);

    onCancel();
  };

  return (
    <div className="createProject--container">
      <Formik
        initialValues={initialState}
        validationSchema={CreateProjectSchema}
        onSubmit={onSubmitMethod}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          values,
          errors,
          touched,
          value,
          ...props
        }) => (
          <form onSubmit={handleSubmit}>
            <FormInput
              {...props}
              name="title"
              label="Título"
              placeholder="Insira o título do projeto"
              isLoading={isSubmitting}
              value={values.title}
              error={errors.title}
              touched={touched.title}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <Input.TextArea
              {...props}
              name="description"
              label="Descrição"
              placeholder="Insira descrição do projeto"
              isLoading={isSubmitting}
              value={values.description}
              error={errors.description}
              touched={touched.description}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <div>
              <div>
                <DatePicker
                  {...props}
                  name="dueDate"
                  label="Fim do prazo:  "
                  placeholder="Insira a data"
                  isLoading={isSubmitting}
                  value={values.dueDate}
                  error={errors.dueDate}
                  touched={touched.dueDate}
                  handleChange={handleChange}
                />

                <InputNumber
                  {...props}
                  name="duration"
                  label="Duração: "
                  placeholder="Insira o tempo de duração do projeto"
                  isLoading={isSubmitting}
                  value={values.duration}
                  error={errors.duration}
                  touched={touched.duration}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <InputNumber
                  {...props}
                  name="hourPrice"
                  label="Preço por Hora trabalhada:"
                  placeholder="Insira o valor"
                  isLoading={isSubmitting}
                  value={values.hourPrice}
                  error={errors.hourPrice}
                  touched={touched.hourPrice}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <div>
                <Select
                  {...props}
                  name="status"
                  defaultActiveFirstOption
                  style={{ width: 200 }}
                  label="Status:"
                  placeholder="Insira o valor"
                  isLoading={isSubmitting}
                  value={status}
                  error={errors.status}
                  touched={touched.status}
                  handleChange={getData}
                >
                  {options.map(option => (
                    <Select.Option value={option.value}>
                      {option.value}
                    </Select.Option>
                  ))}
                </Select>

                <InputNumber
                  {...props}
                  name="cost"
                  label="Custo do projeto:"
                  placeholder="Insira o valor"
                  isLoading={isSubmitting}
                  value={values.cost}
                  error={errors.cost}
                  touched={touched.cost}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="btn--createProject">
              <Button type="submit" isLoading={isSubmitting}>
                Cadastrar
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProject;
