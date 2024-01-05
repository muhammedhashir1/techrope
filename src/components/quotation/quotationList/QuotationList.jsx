import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import styles from "./QuotationList.module.css";
import QuotationHeader from "../quotationHeader/QuotationHeader";

const QuotationList = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const [searchParams, setSearchParams] = useState({
    searchBy: "All",
    from: getCurrentDate(),
    to: getCurrentDate(),
    sortBy: "All",
    sortOrder: "Ascending",
  });

  const handleSearchParamsChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleShow = () => {
    // Add your logic to show/hide filter options
  };

  const handleClear = () => {
    setSearchParams({
      searchBy: "All",
      from: getCurrentDate(),
      to: getCurrentDate(),
      sortBy: "All",
      sortOrder: "Ascending",
    });
  };

  return (
    <>
      <QuotationHeader />
      <div className={styles.quotationlist_container}>
        <div className={styles.sortSection}>
          <div className={styles.leftSection}>
            <label>
              Search By:
              <select name="searchBy" value={searchParams.searchBy} onChange={handleSearchParamsChange}>
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
                {/* Add other options */}
              </select>
            </label>
            <label>
              From:
              <input type="date" name="from" value={searchParams.from} onChange={handleSearchParamsChange} />
            </label>
            <label>
              To:
              <input type="date" name="to" value={searchParams.to} onChange={handleSearchParamsChange} />
            </label>
            <label>
              Sort By:
              <select name="sortBy" value={searchParams.sortBy} onChange={handleSearchParamsChange}>
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
                {/* Add other options */}
              </select>
            </label>
            <label>
              Sort Order:
              <select name="sortOrder" value={searchParams.sortOrder} onChange={handleSearchParamsChange}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </label>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.rightSectionDiv}>
              <button className={styles.filterButton} onClick={handleShow}>
                <FaFilter />
                Show
              </button>
              <button className={styles.clearButton} onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>QUOTATION NO</th>
                <th>QUOTATION DATE</th>
                <th>CUSTOMER NAME</th>
                <th style={{ textAlign: "right" }}>NET VALUE</th>
                <th style={{ textAlign: "right" }}>TAX AMOUNT</th>
                <th style={{ textAlign: "right" }}>NET AMOUNT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1001</td>
                <td>2022-01-01</td>
                <td>Customer A</td>
                <td style={{ textAlign: "right" }}>100.00 AED</td>
                <td style={{ textAlign: "right" }}>5.00 AED</td>
                <td style={{ textAlign: "right" }}>105.00 AED</td>
                <td>
                  <button className={`${styles.actionButton} ${styles.blueButton}`}>Edit</button>
                  <button className={`${styles.actionButton} ${styles.redButton}`}>Delete</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
            <tfoot>
              <tr>
                <th style={{ textAlign: "left" }}>TOTAL</th>
                <td colSpan="3"></td>
                <td style={{ textAlign: "right" }}>0.00 AED</td>
                <td style={{ textAlign: "right" }}>0.00 AED</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default QuotationList;
