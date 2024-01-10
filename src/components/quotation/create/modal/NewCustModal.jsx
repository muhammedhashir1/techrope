import React from "react";
import { IoClose } from "react-icons/io5";

import styles from "./NewCustModal.module.css";

const NewCustModal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalContent_head}>
          <div className={styles.modalContent_title}>Create Customer</div>
          <div className={styles.closeIcon} onClick={closeModal}>
            <IoClose />
          </div>
        </header>
        <div className={styles.inputAreaMain}>
          <div className={styles.ledgerTitel}>
            <label htmlFor="">Ledger Name</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label htmlFor="">Ledger Code</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label htmlFor="">Ledger Local Name</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label htmlFor="">Account Group</label>
            <select name="" id="" className={styles.acntGrp}>
              <option value="">SUNDRY DEBTORS</option>
            </select>
            <label htmlFor="">Opening Balance</label>
            <div className={styles.openingBalance}>
              <select name="" id="" className={styles.selectDebCrd}>
                <option value="">Debit</option>
                <option value="">Credit</option>
              </select>
              <input type="text" name="" id="" placeholder="Opening Balance" className={styles.inputOpnBal} />
            </div>
            <div className={styles.subledgerBillWise}>
              <div className={styles.subledger}>
                <input type="checkbox" name="" id="" className={styles.subledgerInput} />
                <label htmlFor="" className={styles.subledgerLabel}>
                  Sub Ledger
                </label>
              </div>
              <div className={styles.BillWise}>
                <input type="checkbox" name="" id="" className={styles.billWiseInput} />
                <label htmlFor="" className={styles.billWiseLabel}>
                  Maintain BillWise Details
                </label>
              </div>
            </div>
            <div className={styles.twoButtonsMain}>
              <div className={styles.addViewAddress}>Add/View Address</div>
              <div className={styles.additionalInfo}>Additional Info</div>
            </div>
            <div className={styles.addressMain}>
              <div className={styles.address}>Address</div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Address"></textarea>
            </div>
            <div className={styles.localAddressMain}>
              <div className={styles.localAddress}>Local Address</div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Address"></textarea>
            </div>

            <div className={styles.zipCodeMain}>
              <div className={styles.localAddress}>Zip Code</div>
              <input type="text" className={styles.zipInput} />
              <div className={styles.localAddress}>Phone</div>
              <input type="text" className={styles.phoneInput} />
              <div className={styles.localAddress}>Mobile</div>
              <input type="text" className={styles.mobileInput} />
              <div className={styles.localAddress}>Email</div>
              <input type="text" className={styles.emailInput} />
              <div className={styles.localAddress}>Country</div>
              <input type="text" className={styles.countryInput} />
              <div className={styles.localAddress}>State</div>
              <input type="text" className={styles.stateInput} />
            </div>

            <label htmlFor=""></label>
          </div>
        </div>
        <footer className={styles.moreInfoModal_footer}>
          <div className={styles.footer_btn}>Create</div>
          <div className={styles.footer_btn}>Cancel</div>
        </footer>
      </div>
    </div>
  );
};

export default NewCustModal;
