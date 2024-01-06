import React, { useState, useEffect } from "react";
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

  const [quotations, setQuotations] = useState([]);

  const fetchQuotations = async () => {
    const apiUrl =
      "https://mysaleappreportsapi-7lfpakcp7q-el.a.run.app/api/v1/Quotation?pageNo=1&pageSize=10&desc=false&startDate=2024-01-06&endDate=2024-01-06&sortType=&branchId=63870b069a2ce6762c64444b&companyId=6358dc15fa7df86801678548";

    const dbName = "mysaledb88410944444";

    try {
      const response = await fetch(apiUrl, {
        headers: {
          dbName: dbName,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Quotations Data:", data.data);
      setQuotations(data.data); // Set quotations state with the fetched data
    } catch (error) {
      console.error("Error fetching quotations:", error);
    }
  };

  useEffect(() => {
    fetchQuotations();
  }, []);
  return (
    <>
      <QuotationHeader itemsCount={quotations.length} />
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
              <input
                type="date"
                name="from"
                value={searchParams.from}
                onChange={handleSearchParamsChange}
                className={styles.inputDataFields}
              />
            </label>
            <label>
              To:
              <input
                type="date"
                name="to"
                value={searchParams.to}
                onChange={handleSearchParamsChange}
                className={styles.inputDataFields}
              />
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
              {quotations.map((quotation) => (
                <tr key={quotation.quotationId}>
                  <td>{quotation.quotationNo}</td>
                  <td>{quotation.quotationDate}</td>
                  <td>{quotation.customerName}</td>
                  <td style={{ textAlign: "right" }}>{quotation.netValue}</td>
                  <td style={{ textAlign: "right" }}>{quotation.taxAmount}</td>
                  <td style={{ textAlign: "right" }}>{quotation.netAmount}</td>
                  <td>
                    <button className={`${styles.actionButton} ${styles.blueButton}`}>Edit</button>
                    <button className={`${styles.actionButton} ${styles.redButton}`}>Delete</button>
                  </td>
                </tr>
              ))}
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
