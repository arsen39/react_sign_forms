import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { PATHS } from "../../common/constants";
import SignInForm from "../../forms/SignInForm";

const SignIn = () => {
  return (
    <>
      <Header />
      <SignInForm />
    </>
  );
};

export default SignIn;
