import React from "react";
import styles from "./QuotationPage.module.css";
import QuotationList from "./quotationList/QuotationList";

const QuotationPage = () => {
  return (
    <div className={styles.quotationpage_container}>
      <QuotationList />
    </div>
  );
};

export default QuotationPage;
