import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { PATHS } from "../../common/constants";
import styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className={styles.homeWrapper}>
        <p className={styles.homeGreeting}>Hello! Do you want Sign in or make a new accaunt?</p>
        <div className={styles.btnWrapper}>
          <Link to={PATHS.signIn}>
            <button className={styles.btn}>Sign In</button>
          </Link>
          <Link to={PATHS.signUp}>
            <button className={styles.btn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
