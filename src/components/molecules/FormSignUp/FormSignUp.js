/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FormInput, Button } from "../../atoms";
import FormSignUpSchema from "./FormSignUp.schema";
import ApiService from "../../../api/Service";
import "./formSignUp.styles.scss";

const FormSignUp = ({ login, ...props }) => {
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const initialState = {
    name: "",
    username: "",
    email: "",
    password: ""
  };

  const onSubmitMethod = async (values, actions) => {
    try {
      const logUser = await ApiService.subscribeUser(values);

      await login();

      localStorage.setItem("logged-user-info", JSON.stringify(logUser));
      actions.setSubmitting(false);

      props.history.push("/dashboard");
    } catch (err) {
      setSignUpErrorMessage(err.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={FormSignUpSchema}
      onSubmit={onSubmitMethod}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur
      }) => (
        <form onSubmit={handleSubmit}>
          <FormInput
            {...props}
            name="name"
            label="Nome"
            placeholder="Insira seu Nome"
            value={values.name}
            error={errors.name || (signUpErrorMessage && true)}
            touched={touched.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <FormInput
            {...props}
            name="username"
            label="Usuário"
            placeholder="Insira seu nome de Usuário"
            value={values.username}
            error={errors.username || (signUpErrorMessage && true)}
            touched={touched.username}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <FormInput
            {...props}
            name="email"
            label="Email"
            placeholder="Insira seu Email"
            value={values.email}
            error={errors.email || (signUpErrorMessage && true)}
            touched={touched.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <FormInput
            {...props}
            name="password"
            label="Senha"
            type="password"
            placeholder="Insira sua senha"
            value={values.password}
            error={errors.password || signUpErrorMessage}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <div className="formSignUp--btn">
            <Button type="submit" isLoading={isSubmitting}>
              Cadastrar
            </Button>
            <span>ou</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormSignUp;
