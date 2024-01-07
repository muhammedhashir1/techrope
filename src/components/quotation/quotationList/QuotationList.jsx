import React, { useState, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaFilter } from "react-icons/fa";
import styles from "./QuotationList.module.css";
import moment from "moment";
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

  const [expandedRows, setExpandedRows] = useState([]);

  const toggleDetails = (quotationId) => {
    setExpandedRows((prevRows) => {
      if (prevRows.includes(quotationId)) {
        return prevRows.filter((row) => row !== quotationId);
      } else {
        return [...prevRows, quotationId];
      }
    });
  };
  const [activeButtons, setActiveButtons] = useState({});

  const handleButtonClick = (quotationId, button) => {
    setActiveButtons((prevButtons) => {
      return { ...prevButtons, [quotationId]: button };
    });
  };

  const [totals, setTotals] = useState({
    netValue: 0,
    taxAmount: 0,
    netAmount: 0,
  });

  const [detailsTotals, setDetailsTotals] = useState({
    grossAmount: 0,
    discountAmount: 0,
    netValue: 0,
    taxAmount: 0,
    netAmount: 0,
  });

  useEffect(() => {
    // Calculate totals when quotations change
    const calculateTotals = () => {
      let totalNetValue = 0;
      let totalTaxAmount = 0;
      let totalNetAmount = 0;

      let totalGrossAmount = 0;
      let totalDiscountAmount = 0;
      let totalDetailsNetValue = 0;
      let totalTaxAmountDetails = 0;
      let totalDetailsNetAmount = 0;

      quotations.forEach((quotation) => {
        totalNetValue += quotation.netValue;
        totalTaxAmount += quotation.taxAmount;
        totalNetAmount += quotation.netAmount;

        // Assuming these fields are present in your quotation object
        totalGrossAmount += quotation.grossAmount;
        totalDiscountAmount += quotation.discountAmount;
        totalDetailsNetValue += quotation.netValue;
        totalTaxAmountDetails += quotation.taxAmount;
        totalDetailsNetAmount += quotation.netAmount;
      });

      setTotals({
        netValue: totalNetValue,
        taxAmount: totalTaxAmount,
        netAmount: totalNetAmount,
      });

      setDetailsTotals({
        grossAmount: totalGrossAmount,
        discountAmount: totalDiscountAmount,
        netValue: totalDetailsNetValue,
        taxAmount: totalTaxAmountDetails,
        netAmount: totalDetailsNetAmount,
      });
    };

    calculateTotals();
  }, [quotations]);
  return (
    <>
      <QuotationHeader itemsCount={quotations.length} />
      <div className={styles.quotationlist_container}>
        <div className={styles.sortSection}>
          <div className={styles.leftSection}>
            <label className={styles.labelTitle}>
              Search By:
              <select name="searchBy" value={searchParams.searchBy} onChange={handleSearchParamsChange}>
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
                {/* Add other options */}
              </select>
            </label>
            <label className={styles.labelTitle}>
              From:
              <input
                type="date"
                name="from"
                value={searchParams.from}
                onChange={handleSearchParamsChange}
                className={styles.inputDataFields}
              />
            </label>
            <label className={styles.labelTitle}>
              To:
              <input
                type="date"
                name="to"
                value={searchParams.to}
                onChange={handleSearchParamsChange}
                className={styles.inputDataFields}
              />
            </label>
            <label className={styles.labelTitle}>
              Sort By:
              <select name="sortBy" value={searchParams.sortBy} onChange={handleSearchParamsChange}>
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
              </select>
            </label>
            <label className={styles.labelTitle}>
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
                <th></th>
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
                    <td className={styles.td}>{quotation.quotationDate}</td>
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
                                    {/* Sample data row */}
                                    <tr>
                                      <td></td>
                                      <td>1 </td>
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
                                      <td>5454</td>
                                      <td>50000</td>
                                      <td>2000</td>
                                      <td></td>
                                      <td>0</td>
                                      <td>50000</td>
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
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th style={{ textAlign: "left" }}>TOTAL</th>
                <td colSpan="3"></td>
                <td style={{ textAlign: "right" }}>{totals.netValue.toFixed(2)} AED</td>
                <td style={{ textAlign: "right" }}>{totals.taxAmount.toFixed(2)} AED</td>
                <td style={{ textAlign: "right" }}>{totals.netAmount.toFixed(2)} AED</td>
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
