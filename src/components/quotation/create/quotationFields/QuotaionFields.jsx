import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { BiBarcodeReader } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import TermsAndSubTotal from "../termsAndSubtotal/TermsAndSubTotal";
import styles from "./QuotationFields.module.css";

const QuotationFields = ({ openNewCustModal }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyId = "6358dc15fa7df86801678548";
        const branchId = "659b810c4b5a52942bfd71c0";
        const apiUrl = `https://mysaleappinventoryapi-7lfpakcp7q-el.a.run.app/api/v1/Item?companyId=${companyId}&branchId=${branchId}&searchType=itemSearch&searchQuery=&pageSize=10`;

        const response = await fetch(apiUrl, {
          headers: {
            "Api-Key": "devinv-d5f7670519cc7e02",
            Dbname: "mysaledb88410944444",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setItems(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  const [selectedItem, setSelectedItem] = useState({
    unit: "",
    rate: "",
    taxPercentage: "",
  });
  const [itemDetails, setItemDetails] = useState({
    quantity: 0,
    amount: 0,
    discountPercentage: 0,
    discountAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
  });
  const handleItemChange = (itemId) => {
    // Find the selected item details
    const selected = items.find((item) => item.id === itemId);
    console.log(selected);

    // Update state with the selected item details
    setSelectedItem({
      unit: selected.unitShortName,
      rate: selected.purchaseRate,
      taxPercentage: selected.saleTax,
    });
  };
  const handleQuantityChange = (value) => {
    const quantity = parseInt(value, 10) || 0;
    const amount = quantity * parseFloat(selectedItem.rate) || 0;
    const taxAmount = (amount * parseFloat(selectedItem.taxPercentage)) / 100 || 0;

    setItemDetails((prevDetails) => ({
      ...prevDetails,
      quantity,
      amount,
      taxAmount,
      totalAmount: amount + taxAmount - prevDetails.discountAmount,
    }));
  };
  const handleDiscountPercentageChange = (value) => {
    const discountPercentage = parseFloat(value) || 0;
    const discountAmount = (discountPercentage / 100) * itemDetails.amount;

    setItemDetails((prevDetails) => ({
      ...prevDetails,
      discountPercentage,
      discountAmount,
      totalAmount: prevDetails.amount + prevDetails.taxAmount - discountAmount,
    }));
  };
  return (
    <div className={styles.quotationField_Main}>
      <div className={styles.customerName_main_section}>
        <div className={`${styles.inputContainer} ${styles.customerName}`}>
          <div>
            <label>
              Customer Name <span className={styles.required}>*</span>
            </label>
            <span className={styles.newCustomer} onClick={openNewCustModal}>
              <IoMdAddCircleOutline /> <span> New Customer</span>
            </span>
          </div>
          <div className={styles.customerNameOptions}>
            <select className={styles.select}>
              <option value="">Select Customer</option>
            </select>
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.phoneNumber}`}>
          <label>Phone Number</label>
          <div className={styles.inlineField}>
            <input type="tel" placeholder="phone number" className={styles.inlineField_cstmr} />
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.narration}`}>
          <label>Narration</label>
          <div className={styles.inlineField}>
            <input type="text" placeholder="narration" className={styles.inlineField_cstmr} />
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
                <select
                  className={styles.select}
                  style={{ border: "1px solid #c0caca" }}
                  onChange={(e) => handleItemChange(e.target.value)}
                >
                  <option value="">Choose Item</option>
                  {items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.itemName}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  style={{ border: "1px solid #c0caca" }}
                  className={styles.itemtable_input}
                  onChange={(e) => handleQuantityChange(e.target.value)}
                />
              </td>

              <td>
                <input
                  type="text"
                  style={{ border: "1px solid #c0caca" }}
                  className={styles.itemtable_input}
                  value={selectedItem.unit}
                  onChange={(e) => setSelectedItem({ ...selectedItem, unit: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={selectedItem.rate}
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  onChange={(e) => setSelectedItem({ ...selectedItem, rate: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  value={itemDetails.amount.toFixed(2)}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  onChange={(e) => handleDiscountPercentageChange(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  value={itemDetails.discountAmount.toFixed(2)}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={selectedItem.taxPercentage}
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  onChange={(e) => setSelectedItem({ ...selectedItem, taxPercentage: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="text"
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  value={itemDetails.taxAmount.toFixed(2)}
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  className={`${styles.inputTdAlignment} ${styles.itemtable_input}`}
                  style={{ textAlign: "right" }}
                  value={itemDetails.totalAmount.toFixed(2)}
                  readOnly
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
            {/* <TableRow /> */}
          </tbody>
        </table>
      </div>
      <div className={styles.addAnotherField}>
        <IoMdAddCircleOutline />
        <span>add another item</span>
      </div>

      <TermsAndSubTotal />
    </div>
  );
};

export default QuotationFields;
