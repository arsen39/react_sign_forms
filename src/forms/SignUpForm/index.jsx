import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_UP_SCHEMA } from '../../common/validationSchemas'
import styles from './SignUpForm.module.scss'
import Input from '../Input'

const initialValues = {
  name: '',
  surname: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  joinRole: ''
}

const SignUpForm = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formikProps => {
        return (
          <Form className={styles.form}>
            <div className={styles.evenInputs}>
              <Input name='name' type='text' placeholder='First Name' />
              <Input name='surname' type='text' placeholder='Second Name' />
            </div>
            <div className={styles.evenInputs}>
              <Input
                name='displayName'
                type='text'
                placeholder='Display Name'
              />
              <Input name='email' type='email' placeholder='Email' />
            </div>
            <div className={styles.evenInputs}>
              <Input name='password' type='password' placeholder='Password' />
              <Input
                name='passwordConfirm'
                type='password'
                placeholder='Password Confirmation'
              />
            </div>

            <label className={styles.radioGroup}>
              <div className={styles.radioWrapper}>
                <Field name='joinRole' type='radio' value='0' className={styles.radio}/>
                <div className={styles.radioText}>
                  <h1>Join As a Buyer</h1>
                  <p>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
              </div>
              <div className={styles.radioWrapper}>
                <Field name='joinRole' type='radio' value='1' className={styles.radio}/>
                <div className={styles.radioText}>
                  <h1>Join As a Creative or Marketplace Seller</h1>
                  <p>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
              </div>
            </label>

            <Field type='submit' name='submit' className={styles.btn} />
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
