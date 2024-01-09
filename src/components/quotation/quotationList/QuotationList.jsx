import React, { useState, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaFilter } from "react-icons/fa";
import styles from "./QuotationList.module.css";
import moment from "moment";
import QuotationHeader from "../quotationHeader/QuotationHeader";
import QuotationRow from "./QuotationRow";

const QuotationList = () => {
  const getCurrentDate = () => moment().format("YYYY-MM-DD");

  const [searchParams, setSearchParams] = useState({
    searchBy: "All",
    from: getCurrentDate(),
    to: getCurrentDate(),
    sortBy: "All",
    sortOrder: "Ascending",
  });

  const handleSearchParamsChange = (e) => setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  const handleShow = () => {
    console.log("Show button clicked");
  };

  const handleClear = () => {};

  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const response = await fetch(
          "https://mysaleappreportsapi-7lfpakcp7q-el.a.run.app/api/v1/Quotation?pageNo=1&pageSize=10&desc=false&startDate=2024-01-06&endDate=2024-01-06&sortType=&branchId=63870b069a2ce6762c64444b&companyId=6358dc15fa7df86801678548",
          {
            headers: {
              dbName: "mysaledb88410944444",
              "api-key": "devrpt-faea8494bf2b8fa1",
            },
          }
        );

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setQuotations(data.data);
      } catch (error) {
        console.error("Error fetching quotations:", error);
      }
    };

    fetchQuotations();
  }, []);

  const [expandedRows, setExpandedRows] = useState([]);
  const toggleDetails = (quotationId) =>
    setExpandedRows((prevRows) =>
      prevRows.includes(quotationId) ? prevRows.filter((row) => row !== quotationId) : [...prevRows, quotationId]
    );

  const [activeButtons, setActiveButtons] = useState({});
  const handleButtonClick = (quotationId, button) =>
    setActiveButtons((prevButtons) => ({ ...prevButtons, [quotationId]: button }));

  const [totals, setTotals] = useState({ netValue: 0, taxAmount: 0, netAmount: 0 });
  const [detailsTotals, setDetailsTotals] = useState({
    grossAmount: 0,
    discountAmount: 0,
    netValue: 0,
    taxAmount: 0,
    netAmount: 0,
  });

  useEffect(() => {
    const calculateTotals = () => {
      const initialValue = {
        totalNetValue: 0,
        totalTaxAmount: 0,
        totalNetAmount: 0,
        totalGrossAmount: 0,
        totalDiscountAmount: 0,
        totalDetailsNetValue: 0,
        totalTaxAmountDetails: 0,
        totalDetailsNetAmount: 0,
      };

      const {
        totalNetValue,
        totalTaxAmount,
        totalNetAmount,
        totalGrossAmount,
        totalDiscountAmount,
        totalDetailsNetValue,
        totalTaxAmountDetails,
        totalDetailsNetAmount,
      } = quotations.reduce(
        (acc, quotation) => ({
          totalNetValue: acc.totalNetValue + quotation.netValue,
          totalTaxAmount: acc.totalTaxAmount + quotation.taxAmount,
          totalNetAmount: acc.totalNetAmount + quotation.netAmount,
          totalGrossAmount: acc.totalGrossAmount + quotation.grossAmount,
          totalDiscountAmount: acc.totalDiscountAmount + quotation.discountAmount,
          totalDetailsNetValue: acc.totalDetailsNetValue + quotation.netValue,
          totalTaxAmountDetails: acc.totalTaxAmountDetails + quotation.taxAmount,
          totalDetailsNetAmount: acc.totalDetailsNetAmount + quotation.netAmount,
        }),
        initialValue
      );

      setTotals({ netValue: totalNetValue, taxAmount: totalTaxAmount, netAmount: totalNetAmount });
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

  // New state for pagination
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages based on the pageSize
  const totalPages = Math.ceil(quotations.length / pageSize);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the current page items
  const currentQuotations = quotations.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle pageSize change
  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when pageSize changes
  };

  return (
    <>
      <QuotationHeader itemsCount={quotations.length} />
      <div className={styles.quotationlist_container}>
        <div className={styles.sortSection}>
          <div className={styles.leftSection}>
            <label className={styles.labelTitle}>
              Search By:
              <select
                className={styles.sortSelect}
                name="searchBy"
                value={searchParams.searchBy}
                onChange={handleSearchParamsChange}
              >
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
                <option value="CustomerName">Customer Name</option>
                <option value="NetAmountEqualto">Net Amount Equal to</option>
                <option value="NetAmountGreaterThan">Net Amount Greater than</option>
                <option value="NetAmountLessThan">Net Amount less than</option>
                <option value="QuotationSeries">Quotation Series</option>
                <option value="StockLocation">StockLocation</option>
                <option value="User">User</option>
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
              <select
                className={styles.sortSelect}
                name="sortBy"
                value={searchParams.sortBy}
                onChange={handleSearchParamsChange}
              >
                <option value="All">All</option>
                <option value="QuotationNumber">Quotation Number</option>
                <option value="QuotationDate">Quotation Date</option>
                <option value="CustomerName">Customer Name</option>
                <option value="NetAmount">Net Amount</option>
              </select>
            </label>
            <label className={styles.labelTitle}>
              Sort Order:
              <select
                className={styles.sortSelect}
                name="sortOrder"
                value={searchParams.sortOrder}
                onChange={handleSearchParamsChange}
              >
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
              {currentQuotations.map((quotation) => (
                <QuotationRow
                  key={quotation.quotationId}
                  quotation={quotation}
                  toggleDetails={toggleDetails}
                  expandedRows={expandedRows}
                  handleButtonClick={handleButtonClick}
                  activeButtons={activeButtons}
                />
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
        <div className={styles.pagination}>
          <fieldset className={styles.fieldset}>
            <legend>Items</legend>
            <select value={pageSize} onChange={handlePageSizeChange} className={styles.select}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </fieldset>
          <div className={styles.btnMainPagination}>
            {currentPage !== 1 && (
              <div className={styles.paginationIcons} onClick={() => handlePageChange(currentPage - 1)}>
                <FaArrowAltCircleLeft style={{ color: "#3498db" }} />
              </div>
            )}
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            {currentPage !== totalPages && (
              <div className={styles.paginationIcons} onClick={() => handlePageChange(currentPage + 1)}>
                <FaArrowAltCircleRight style={{ color: "#3498db" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotationList;
