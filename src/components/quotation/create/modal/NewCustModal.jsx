import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./NewCustModal.module.css";

const NewCustModal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalContent_head}>
          <div className={styles.modalContent_title}>New Customer Info</div>
          <div className={styles.closeIcon} onClick={closeModal}>
            <IoClose />
          </div>
        </header>
        {/* Add your content for the new customer modal */}
        <div className={styles.newCustomerContent}>{/* ... */}</div>
      </div>
    </div>
  );
};

export default NewCustModal;
