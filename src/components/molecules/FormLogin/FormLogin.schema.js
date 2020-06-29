import * as yup from "yup";

const FormLoginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Campo obrigatório")
    .min(4, "Mínimo de 4 caracteres")
    .max(20, "Máximo de 20 caracteres"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "Mínimo de 5 caracteres")
    .max(60, "Máximo de 60 caracteres")
});

export default FormLoginSchema;
