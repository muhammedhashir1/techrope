import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./NewItemModal.module.css";

const NewItemModal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalContent_head}>
          <div className={styles.modalContent_title}>Create Item</div>
          <div className={styles.closeIcon} onClick={closeModal}>
            <IoClose />
          </div>
        </header>
        <div>hai</div>
        <footer className={styles.moreInfoModal_footer}>
          <div className={styles.footer_btn_create}>Create</div>
          <div className={styles.footer_btn_cancel}>Cancel</div>
        </footer>
      </div>
    </div>
  );
};

export default NewItemModal;
