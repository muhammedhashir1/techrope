// Aside.js
import React from "react";
import { Link } from "react-router-dom";
import one from "../../assets/side/one.png";
import two from "../../assets/side/two.png";
import three from "../../assets/side/three.png";
import four from "../../assets/side/four.png";
import five from "../../assets/side/five.png";
import six from "../../assets/side/six.png";
import seven from "../../assets/side/seven.png";
import quotation from "../../assets/side/quotation.png";
import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <div className={styles.aside_main}>
      <img src={one} alt="one" />
      <img src={two} alt="two" />
      <img src={three} alt="three" />
      <img src={four} alt="four" />
      <img src={five} alt="five" />
      <img src={six} alt="six" />
      <img src={seven} alt="seven" />
      <Link to="/quotation">
        <img src={quotation} alt="quotation" />
      </Link>
    </div>
  );
};

export default Aside;
