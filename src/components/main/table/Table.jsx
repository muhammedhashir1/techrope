import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Table.module.css";

const Table = () => {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const dbName = "tradeapptestdb";
      const response = await fetch("https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app/api/v1/Item", {
        headers: {
          dbName: dbName,
        },
      });

      console.log("Response Status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        setItems(data.data);
        setShowItems(true);
      } else {
        console.error("Failed to fetch items");
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowButtonClick = () => {
    setShowItems(true);
  };

  const handleClearButtonClick = () => {
    toast.error("Access Denied", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setShowItems(false);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.sort_section}>
        <div className={styles.leftSection}>
          <div className={styles.selectColumn}>
            <label>Search By</label>
            <div className={styles.selectColumnContent}>
              <span>All</span>
              <MdArrowDropDown className={styles.dropDownIcon} />
            </div>
          </div>
          <div className={styles.selectColumn}>
            <label>Sort By</label>
            <div className={styles.selectColumnContent}>
              <span>All</span>
              <MdArrowDropDown className={styles.dropDownIcon} />
            </div>
          </div>
          <div className={styles.selectColumn}>
            <label>Sort Order</label>
            <div className={styles.selectColumnContent}>
              <span>Ascending</span>
              <MdArrowDropDown className={styles.dropDownIcon} />
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <button className={`${styles.button} ${styles.blueButton}`} onClick={handleShowButtonClick}>
            <FaFilter /> Show
          </button>
          <button className={`${styles.button} ${styles.whiteButton}`} onClick={handleClearButtonClick}>
            Clear
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        showItems && (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ITEM NAME</th>
                  <th>ITEM CODE</th>
                  <th>CATEGORY NAME</th>
                  <th>LANDING COST</th>
                  <th>SELLING RATE</th>
                  <th>STOCK</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {items.length > 0 ? (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.item_name}</td>
                      <td>{item.item_code}</td>
                      <td>{item.category_name}</td>
                      <td>{item.landing_cost}</td>
                      <td>{item.selling_rate}</td>
                      <td>{item.stock}</td>
                      <td>
                        <button className={`${styles.actionButton} ${styles.blueButton}`}>Edit</button>
                        <button className={`${styles.actionButton} ${styles.redButton}`}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className={styles.noItems}>
                      No items available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )
      )}
      <ToastContainer />
    </div>
  );
};

export default Table;
