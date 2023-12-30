import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import hamburger from "../../assets/header/hamburger.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_main}>
      <div className={styles.leftSection}>
        <img src={hamburger} alt="Hamburger" className={styles.hamburgerIcon} />
      </div>
      <div className={styles.rightSection}>
        <fieldset className={styles.selectColumn}>
          <legend className={styles.legend}>Company</legend>
          <div className={styles.selectColumnContent}>
            <span className={styles.text}>Am entertainment</span>
            <MdArrowDropDown className={styles.dropDownIcon} />
          </div>
        </fieldset>
        <fieldset className={styles.selectColumn}>
          <legend className={styles.legend}>Branch</legend>
          <div className={styles.selectColumnContent}>
            <span className={styles.text}>INSTORE BRANCH</span>
            <MdArrowDropDown className={styles.dropDownIcon} />
          </div>
        </fieldset>
        <fieldset className={styles.selectColumn}>
          <legend className={styles.legend}>Language</legend>
          <div className={styles.selectColumnContent}>
            <span className={styles.text}>English</span>
            <MdArrowDropDown className={styles.dropDownIcon} />
          </div>
        </fieldset>
        <div className={styles.profileSection}>
          <CgProfile className={styles.profileIcon} />
          <span className={styles.profileName}>123123123</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
