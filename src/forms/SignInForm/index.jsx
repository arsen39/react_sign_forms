import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEMA } from "../../common/validationSchemas";
import styles from './SignInForm.module.scss'
import Input from "../Input";

const initialValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <Input name='email' placeholder='Email' className={styles.input}/>
            <Input name='password' type='password' placeholder='Password' className={styles.input} />
            <Field type="submit" name="submit" className={styles.btn} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
