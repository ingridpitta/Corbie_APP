import * as yup from "yup";

const FormSignUpSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  username: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "Mínimo de 4 caracteres")
    .max(20, "Máximo de 20 caracteres"),
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Formato inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "Mínimo de 5 caracteres")
    .max(60, "Máximo de 60 caracteres")
});

export default FormSignUpSchema;
