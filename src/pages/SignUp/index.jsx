import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { PATHS } from "../../common/constants";
import SignUpForm from "../../forms/SignUpForm";
import styles from "./SignUp.module.scss"

const SignUp = () => {
  return (
    <>
      <Header />
      <div className={styles.pageBody}>
        <h1 className={styles.formHead}>CREATE AN ACCOUNT</h1>
        <p className={styles.formHeadText}>We always keep your name and email address private.</p>
        <SignUpForm/>
      </div>
      
    </>
  );
};

export default SignUp;
