import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./MoreInfoModal.module.css";

const MoreInfoModal = ({ closeModal }) => {
  const handleContentClick = (e) => {
    // Prevent the click event from propagating to the modal backdrop
    e.stopPropagation();
  };
  const handleDoneButtonClick = () => {
    // Close the modal when the "Done" button is clicked
    closeModal();
  };
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={handleContentClick}>
        <header className={styles.modalContent_head}>
          <div className={styles.modalContent_title}>More Quotation Info</div>
          <div className={styles.closeIcon} onClick={closeModal}>
            <IoClose />
          </div>
        </header>
        <div className={styles.data_inputs}>
          <div className={styles.InputTitle}>Date</div>
          <input type="date" className={styles.InputField} />
          <div className={styles.InputTitle}>Currency</div>
          <select name="" id="" className={styles.OptField}>
            <option value="">UAE Dirham</option>
          </select>
          <div className={styles.InputTitle}>Series</div>
          <select name="" id="" className={styles.OptField}>
            <option value="">QT Series</option>
          </select>
          <div className={styles.InputTitle}>Employee</div>
          <select name="" id="" className={styles.OptField}>
            <option value="">Default</option>
          </select>
        </div>
        <footer className={styles.moreInfoModal_footer}>
          <button className={styles.footer_btn} onClick={handleDoneButtonClick}>
            Done
          </button>
        </footer>
      </div>
    </div>
  );
};

export default MoreInfoModal;
