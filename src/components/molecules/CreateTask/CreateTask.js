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
import CreateTaskSchema from "./CreateTask.schema";
import ApiService from "../../../api/Service";
import "antd/dist/antd.css";

const CreateTask = ({ getData, options, onSubmitMethod }) => {
  const initialState = {
    title: "",
    description: "",
    duration: "",
    cost: "",
    status: "",
    type: "",
    profitable: "true",
    creationDate: "",
    dueDate: ""
  };

  return (
    <div className="createProject--container">
      <Formik
        initialValues={initialState}
        validationSchema={CreateTaskSchema}
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
              placeholder="Insira o título da tarefa"
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
              placeholder="Insira descrição da tarefa"
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
                  placeholder="Insira o tempo de duração da tarefa"
                  isLoading={isSubmitting}
                  value={values.duration}
                  error={errors.duration}
                  touched={touched.duration}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <div>
                <SelectInput
                  {...props}
                  name="status"
                  label="Status:"
                  placeholder="Insira o status"
                  isLoading={isSubmitting}
                  value={values.status}
                  error={errors.status}
                  touched={touched.status}
                  defaultValue={values.status}
                  data={options}
                  handleChange={getData}
                />

                <FormInput
                  {...props}
                  name="profitable"
                  label="Profitable"
                  placeholder=""
                  isLoading={isSubmitting}
                  value={values.profitable}
                  error={errors.profitable}
                  touched={touched.profitable}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormInput
                  {...props}
                  name="type"
                  label="Tipo"
                  placeholder="Insira o tipo"
                  isLoading={isSubmitting}
                  value={values.type}
                  error={errors.type}
                  touched={touched.type}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="btn--createTask">
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

export default CreateTask;
