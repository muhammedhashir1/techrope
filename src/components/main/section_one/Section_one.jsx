import React, { useState } from "react";
import { FaPrint } from "react-icons/fa6";
import { LuImport } from "react-icons/lu";
import { IoSendSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Section_one.module.css";

const SectionOne = ({ itemsCount }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClearButtonClick = () => {
    toast.error("Access Denied", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setShowItems(false);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.main_section}>
        <div className={styles.leftSide}>
          <div className={styles.heading}>
            Item Master
            <div className={styles.blueCircle}>{itemsCount}</div>
          </div>
          <div className={styles.subhead}>Keep track of your items.</div>
        </div>
        <div className={styles.rightSide}>
          <button className={styles.button} onClick={handleClearButtonClick}>
            <FaPrint /> <span className={styles.btn_print}>Print</span>
          </button>
          <button className={styles.button} onClick={handleClearButtonClick}>
            <LuImport /> <span className={styles.btn_export}>Export</span>
          </button>
          <button className={styles.button} onClick={handleClearButtonClick}>
            <span className={styles.btn_send}>Send</span>
            <IoSendSharp />
          </button>
          <button className={styles.button} onClick={handleClearButtonClick}>
            <span className={styles.btn_create}>Create</span>
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
