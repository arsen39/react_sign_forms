import * as Yup from "yup";

const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, "Invalid anem")
  .required();

const EMAIL_SCHEMA = Yup.string().email("Invalid email").required();

const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
    "Password must contain 8 chars and special char"
  )
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
