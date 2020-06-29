/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { FormInput, Button } from "../../atoms";
import FormLoginSchema from "./FormLogin.schema";
import ApiService from "../../../api/Service";
import "./formLogin.styles.scss";

const FormLogin = ({ login, ...props }) => {
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const initialState = {
    username: "",
    password: ""
  };

  const onSubmitMethod = async (values, actions) => {
    console.log("ok");
    try {
      const logUser = await ApiService.loginUser(values);

      login();

      localStorage.setItem("logged-user-info", JSON.stringify(logUser));
      actions.setSubmitting(false);

      props.history.push("/dashboard");
    } catch (err) {
      setLoginErrorMessage(err.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={FormLoginSchema}
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
            name="username"
            label="Usuário"
            placeholder="Insira seu nome de Usuário"
            value={values.username}
            error={errors.username || (loginErrorMessage && true)}
            touched={touched.username}
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
            error={errors.password || loginErrorMessage}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isLoading={isSubmitting}
          />

          <div>
            <Button type="submit" isLoading={isSubmitting}>
              Entrar
            </Button>
            <span>ou</span>
            <Link to="/signup">Cadastre-se</Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default FormLogin;
