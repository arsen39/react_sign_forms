import React from 'react';
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";
import {PATHS} from "../../common/constants"
import styles from './Header.module.scss'


const Header = (props) => {
  const currentPath = window.location.pathname;
  const headerBtnOptions = {};
  if (currentPath === PATHS.home || currentPath === PATHS.signUp) {
    headerBtnOptions.linkTo = `${PATHS.signIn}`;
    headerBtnOptions.btnText = 'Sign In'
  } else {
    headerBtnOptions.linkTo = `${PATHS.signUp}`;
    headerBtnOptions.btnText = 'Sign Up'
  }
  
  return (
    <header className={styles.headerWrapper}>
      <img src={logo} alt="" className={styles.headerLogo}/>
      <Link to={headerBtnOptions.linkTo}> <button className={styles.headerBtn}>{headerBtnOptions.btnText}</button> </Link>
    </header>
  );
}

export default Header;
