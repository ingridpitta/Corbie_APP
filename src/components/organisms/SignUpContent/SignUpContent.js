import React from "react";
import { FormSignUp } from "../../molecules";
import "./signUpContent.styles.scss";

const SignUpContent = ({ login, ...props }) => {
  return (
    <main className="loginContent--container">
      <h1>Bem vindo!</h1>
      <h2>
        Insira seus dados para começar a usar o <span>Corbie.</span>
      </h2>
      <FormSignUp login={login} {...props} />
    </main>
  );
};

export default SignUpContent;
