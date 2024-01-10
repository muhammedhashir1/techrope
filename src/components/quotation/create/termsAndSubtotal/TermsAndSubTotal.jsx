import React, { useState } from "react";
import styles from "./TermsAndSubTotal.module.css";

const TermsAndSubTotal = ({ subtotal, taxPercentage, taxAmount, grandTotal }) => {
  const [roundOffValue, setRoundOffValue] = useState(0);
  const [roundOffClicked, setRoundOffClicked] = useState(false);

  const handleRoundOffChange = (value) => {
    setRoundOffValue(parseFloat(value) || 0);
    setRoundOffClicked(false);
  };

  const handleButtonClick = (value) => {
    setRoundOffValue(value);
    setRoundOffClicked(true);
  };

  const calculateGrandTotal = () => {
    return grandTotal + (roundOffClicked ? roundOffValue : 0);
  };

  return (
    <>
      <div className={styles.endArea_main}>
        <div className={styles.termsAndCondition_main}>
          <div className={styles.titleTnC}>Terms and Condition</div>
          <textarea
            placeholder="Enter your terms and conditions here..."
            rows={12}
            cols={55}
            className={styles.textAreaTnC}
          />
        </div>
        <div className={styles.totalArea_main}>
          <table className={styles.verticalTable}>
            <tbody>
              <tr>
                <th className={styles.verticalHeading}>Sub Total</th>
                <td className={styles.verticalContent}>
                  <input type="text" className={styles.tableCol_subTotal} value={subtotal.toFixed(2)} readOnly />
                </td>
              </tr>
              <tr>
                <th className={styles.verticalHeading}>Tax</th>
                <td className={styles.verticalContent}>
                  <input type="text" className={styles.tableCol_Tax} value={`${taxPercentage}%`} readOnly />
                </td>
              </tr>

              {/* <tr>
                <th className={styles.verticalHeading}>
                  <span className={styles.tax_exc}>Tax Exc</span>
                  tax
                </th>
                <td className={styles.verticalContent}>
                  <span className={styles.verticalAmount}>
                    <select className={styles.selectTax}>
                      <option value="">Select</option>
                      <option value="">0 Tax</option>
                      <option value="">10 Tax</option>
                      <option value="">15 Tax</option>
                      <option value="">20 Tax</option>
                    </select>
                  </span>
                </td>
              </tr> */}

              <tr>
                <th className={styles.verticalHeading}>Tax Amount</th>
                <td className={styles.verticalAmount} style={{ textAlign: "right" }}>
                  ${taxAmount.toFixed(2)}
                </td>
              </tr>

              <tr>
                <th className={styles.verticalHeading}>
                  Round Off :
                  <span
                    className={`${styles.roundOff_add} ${roundOffClicked && roundOffValue > 0 ? styles.active : ""}`}
                    onClick={() => handleButtonClick(Math.abs(roundOffValue))}
                  >
                    +
                  </span>
                  <span
                    className={`${styles.roundOff_minus} ${roundOffClicked && roundOffValue < 0 ? styles.active : ""}`}
                    onClick={() => handleButtonClick(-Math.abs(roundOffValue))}
                  >
                    -
                  </span>
                </th>
                <td className={styles.verticalContent}>
                  <span className={styles.verticalAmount}>
                    <input
                      type="text"
                      className={styles.tableCol_subTotal}
                      placeholder="Enter roundoff"
                      value={roundOffValue}
                      onChange={(e) => handleRoundOffChange(e.target.value)}
                    />
                  </span>
                </td>
              </tr>

              <tr>
                <th className={styles.verticalHeading}>Grand Total</th>
                <td className={styles.verticalAmount} style={{ textAlign: "right" }}>
                  ${calculateGrandTotal().toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.endButtons}>
        <div className={styles.resetBtn}>Reset</div>
        <div className={styles.saveNprint}>Save & Print</div>
        <div className={styles.save}>Save</div>
      </div>
    </>
  );
};

export default TermsAndSubTotal;
