import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiBarcodeReader } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import styles from "./QuotationFields.module.css";

const QuotationFields = () => {
  return (
    <div className={styles.quotationField_Main}>
      <div className={styles.customerName_main_section}>
        <div className={`${styles.inputContainer} ${styles.customerName}`}>
          <div>
            <label>
              Customer Name <span className={styles.required}>*</span>
            </label>
            <span className={styles.newCustomer}>
              <IoMdAddCircleOutline /> New Customer
            </span>
          </div>
          <div className={styles.customerNameOptions}>
            <select>
              <option value="">Select Customer</option>
              {/* Add your customer options here */}
            </select>
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.phoneNumber}`}>
          <label>Phone Number</label>
          <div className={styles.inlineField}>
            <input type="tel" placeholder="phone number" />
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.narration}`}>
          <label>Narration</label>
          <div className={styles.inlineField}>
            <input type="text" placeholder="narration" />
          </div>
        </div>
      </div>
      <div className={styles.newItem}>
        <IoMdAddCircleOutline /> <span>New Item</span>
      </div>
      <div className={styles.itemtable}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "20%" }}>Code or Item Name</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Dis %</th>
              <th>Dis Amount</th>
              <th>Tax %</th>
              <th>Tax Amount</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <select style={{ border: "1px solid #c0caca" }}>
                  <option value="">Choose Item</option>
                  {/* Add your item options here */}
                </select>
              </td>
              <td>
                <input type="text" style={{ border: "1px solid #c0caca" }} />
              </td>
              <td>
                <select style={{ border: "1px solid #c0caca" }}>
                  <option value="">Choose Unit</option>
                </select>
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <input type="text" className={styles.inputTdAlignment} style={{ textAlign: "right" }} />
              </td>
              <td>
                <div className={styles.tableIcons}>
                  <div>
                    <BiBarcodeReader style={{ color: "blue" }} />
                    <BiMessageDots />
                  </div>
                  <div>
                    <RiDeleteBin6Line style={{ color: "red" }} />
                    <MdOutlineSpeakerNotes />
                  </div>
                </div>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuotationFields;
