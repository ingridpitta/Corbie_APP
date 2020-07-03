import React from "react";
import { Formik } from "formik";
import {
  FormInput,
  DatePicker,
  SelectInput,
  InputNumber,
  InputValor
} from "../../atoms";
import { Input, Button } from "antd";
import CreateProjectSchema from "./CreateProject.schema";
import ApiService from "../../../api/Service";
import "./createProject.styles.scss";
import "antd/dist/antd.css";

const CreateProject = ({
  getData,
  options,
  onCancel,
  status,
  onSubmitMethod
}) => {
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

                <InputValor
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
                <SelectInput
                  {...props}
                  name="status"
                  label="Status:"
                  placeholder="Insira o valor"
                  isLoading={isSubmitting}
                  value={values.status}
                  error={errors.status}
                  touched={touched.status}
                  defaultValue={values.status}
                  data={options}
                  handleChange={getData}
                />

                <InputValor
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
                CADASTRAR
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProject;
