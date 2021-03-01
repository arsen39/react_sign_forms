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
      <SignUpForm/>
    </>
  );
};

export default SignUp;
