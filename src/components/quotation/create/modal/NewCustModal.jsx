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
        <div className={styles.inputAreaMain}>
          <div className={styles.ledgerTitel}>
            <label htmlFor="">Ledger Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Ledger Code</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Ledger Local Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Account Group</label>
            <select name="" id="">
              <option value="">SUNDRY DEBTORS</option>
            </select>
            <label htmlFor="">Opening Balance</label>
            <div className={styles.openingBalance}>
              <select name="" id="">
                <option value="">Debit</option>
                <option value="">Credit</option>
              </select>
              <input type="text" name="" id="" placeholder="Opening Balance" />
            </div>
            <div className={styles.subledgerBillWise}>
              <div className={styles.subledger}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Sub Ledger</label>
              </div>
              <div className={styles.BillWise}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Maintain BillWise Details</label>
              </div>
            </div>

            <label htmlFor=""></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustModal;
