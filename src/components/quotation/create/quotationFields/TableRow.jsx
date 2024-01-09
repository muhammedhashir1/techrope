import React from "react";
import { BiBarcodeReader } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import styles from "./QuotationFields.module.css";

const TableRow = ({ item }) => {
  console.log(item);
  return (
    <tr>
      <td>
        <input type="text" style={{ border: "1px solid #c0caca" }} className={styles.itemtable_input} />
      </td>
      <td>
        <select className={styles.select} style={{ border: "1px solid #c0caca" }}>
          <option value="">Choose Unit</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <input
          type="text"
          className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
          style={{ textAlign: "right" }}
        />
      </td>
      <td>
        <div className={styles.tableIcons}>
          <div>
            <BiBarcodeReader style={{ color: "blue" }} className={styles.icons_} />
            <BiMessageDots className={styles.icons_} />
          </div>
          <div>
            <RiDeleteBin6Line style={{ color: "red" }} className={styles.icons_} />
            <MdOutlineSpeakerNotes className={styles.icons_} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
