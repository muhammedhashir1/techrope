import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import moment from "moment";
import styles from "./QuotationList.module.css";

const QuotationRow = ({ quotation, toggleDetails, expandedRows, handleButtonClick, activeButtons }) => (
  <React.Fragment key={quotation.quotationId}>
    <tr key={quotation.quotationId}>
      <td className={styles.td}>
        <button onClick={() => toggleDetails(quotation.quotationId)}>
          {expandedRows.includes(quotation.quotationId) ? (
            <TiArrowSortedUp className={styles.iconsArrow} />
          ) : (
            <TiArrowSortedDown className={styles.iconsArrow} />
          )}
        </button>
      </td>
      <td className={styles.td}>{quotation.quotationNo}</td>
      <td className={styles.td}>{moment(quotation.quotationDate).format("lll")}</td>
      <td className={styles.td}>{quotation.customerName}</td>
      <td className={styles.td} style={{ textAlign: "right" }}>
        {quotation.netValue}
      </td>
      <td className={styles.td} style={{ textAlign: "right" }}>
        {quotation.taxAmount}
      </td>
      <td className={styles.td} style={{ textAlign: "right" }}>
        {quotation.netAmount}
      </td>
      <td className={styles.td}>
        <button className={`${styles.actionButton} ${styles.blueButton}`}>Edit</button>
        <button className={`${styles.actionButton} ${styles.redButton}`}>Delete</button>
      </td>
    </tr>
    {expandedRows.includes(quotation.quotationId) && (
      <tr>
        <td colSpan="8">
          <div className={styles.reportDetailingMain}>
            <div className={styles.reportBtns_Main}>
              <button
                className={`${styles.reportBtns} ${
                  activeButtons[quotation.quotationId] === "Quotation Info" ? styles.activeButton : ""
                }`}
                onClick={() => handleButtonClick(quotation.quotationId, "Quotation Info")}
              >
                Quotation Info
              </button>
              <button
                className={`${styles.reportBtns} ${
                  activeButtons[quotation.quotationId] === "Quotation Details" ? styles.activeButton : ""
                }`}
                onClick={() => handleButtonClick(quotation.quotationId, "Quotation Details")}
              >
                Quotation Details
              </button>
            </div>
            {activeButtons[quotation.quotationId] === "Quotation Info" && (
              <div className={styles.quotationInfoMain}>
                <div className={styles.quotationInfoMain_Table}>
                  <table className={styles.table_out}>
                    <tbody>
                      <tr>
                        <td className={styles.infoTd}>Branch</td>
                        <td>: {quotation.branchName}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Quotation Number</td>
                        <td>: {quotation.quotationNo}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Quotation Date</td>
                        <td>: {moment(quotation.quotationDate).format("lll")}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Customer Name</td>
                        <td>: {quotation.customerName}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Phone Number</td>
                        <td>: {quotation.phoneNumber}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Employee Name</td>
                        <td>: {quotation.employeeName}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className={styles.table_out}>
                    <tbody>
                      <tr>
                        <td className={styles.infoTd}>Stock Location</td>
                        <td>: {quotation.stockLocationName}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Narration</td>
                        <td>: {quotation.narration}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Gross Amount</td>
                        <td>: {quotation.grossAmount}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Discount Amount</td>
                        <td>: {quotation.discountAmount}</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className={styles.table_out}>
                    <tbody>
                      <tr>
                        <td className={styles.infoTd}>Additional Charges</td>
                        <td>: {quotation.additionalExpense}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Net Value</td>
                        <td>: {quotation.netValue}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Tax Amount</td>
                        <td>: {quotation.taxAmount}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Round Off</td>
                        <td>: {quotation.roundOff}</td>
                      </tr>
                      <tr>
                        <td className={styles.infoTd}>Net Amount</td>
                        <td>: {quotation.branchName}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeButtons[quotation.quotationId] === "Quotation Details" && (
              <div className={styles.quotationDetailsMain}>
                <div className={styles.quotationDetailsMain_Table}>
                  <table className={styles.table_out}>
                    <thead>
                      <tr>
                        <th></th>
                        <th>SL NO</th>
                        <th>ITEM NAME</th>
                        <th>QTY</th>
                        <th>FREE QTY</th>
                        <th>RATE (INCL)</th>
                        <th>RATE (EXCL)</th>
                        <th>GROSS AMOUNT</th>
                        <th>DISCOUNT</th>
                        <th>NET VALUE</th>
                        <th>TAX%</th>
                        <th>TAX AMOUNT</th>
                        <th>NET AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <TiArrowSortedDown />
                        </td>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{quotation.grossAmount}</td>
                        <td>{quotation.discountAmount}</td>
                        <td>{quotation.netValue}</td>
                        <td></td>
                        <td>{quotation.taxAmount}</td>
                        <td>{quotation.netAmount}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th></th>
                        <th>Total</th>
                        <th rowSpan="5"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{quotation.grossAmount.toFixed(2)}</td>
                        <td>{quotation.discountAmount.toFixed(2)}</td>
                        <td>{quotation.netValue.toFixed(2)}</td>
                        <td></td>
                        <td>{quotation.taxAmount.toFixed(2)}</td>
                        <td>{quotation.netAmount.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
    )}
  </React.Fragment>
);

export default QuotationRow;
