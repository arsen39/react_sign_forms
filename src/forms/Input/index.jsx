import React from "react";
import cx from "classnames";
import styles from "./Input.module.scss";
import {Field, ErrorMessage } from "formik";

const CustomErrMsg = (msg) => {
 return (
   <div className={styles.errMsg}>
     <p>{msg}</p>
   </div>
 )
}

const Input = ({ name, ...rest }) => {
  return (
    <label className={styles.inputWrapper}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx(styles.input, {
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });

          return (
            <input type="text" {...field} className={classNames} {...rest} />
          );
        }}
      </Field>
      <ErrorMessage name={name} children={CustomErrMsg} />
    </label>
  );
};

export default Input;
