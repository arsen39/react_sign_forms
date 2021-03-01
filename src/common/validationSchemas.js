import * as Yup from "yup";

const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, "Invalid name")
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

export const SIGN_UP_SCHEMA = Yup.object({
  name: NAME_SCHEMA,
  surname: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  joinRole: Yup.string().required(),
});
