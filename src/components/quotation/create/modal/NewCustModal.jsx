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
            <label className={styles.ledgerLabel}>Ledger Name</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label className={styles.ledgerLabel}>Ledger Code</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label className={styles.ledgerLabel}>Ledger Local Name</label>
            <input type="text" name="" id="" className={styles.ledgerInput} />
            <label className={styles.accntGrpLabel}>Account Group</label>
            <select name="" id="" className={styles.acntGrp}>
              <option value="">SUNDRY DEBTORS</option>
            </select>
            <label className={styles.opngBlncLbl}>Opening Balance</label>
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
              <textarea
                className={styles.addressTxtArea}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Address"
              ></textarea>
            </div>
            <div className={styles.localAddressMain}>
              <div className={styles.localAddress}>Local Address</div>
              <textarea
                className={styles.localAddressTxtArea}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Local Address"
              ></textarea>
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
              <select className={styles.countryInput}>
                <option value="">Select Country</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
                {/* Add more options as needed */}
              </select>
              <div className={styles.localAddress}>State</div>
              <select className={styles.stateInput}>
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <label htmlFor=""></label>
          </div>
        </div>
        <footer className={styles.moreInfoModal_footer}>
          <div className={styles.footer_btn_create}>Create</div>
          <div className={styles.footer_btn_cancel}>Cancel</div>
        </footer>
      </div>
    </div>
  );
};

export default NewCustModal;
