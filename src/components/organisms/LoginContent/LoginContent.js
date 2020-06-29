import React from "react";
import { FormLogin } from "../../molecules";
import "./loginContent.styles.scss";

const LoginContent = ({ login, ...props }) => {
  return (
    <main className="loginContent--container">
      <h1>Bem vindo!</h1>
      <h2>Insira seus dados e acesse sua conta para continuar.</h2>
      <FormLogin login={login} {...props} />
    </main>
  );
};

export default LoginContent;
