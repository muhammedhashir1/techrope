import React, { useEffect, useState } from "react";
import styles from "./CreateQuotation.module.css";

const CreateQuotation = ({ openMoreInfoModal }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={styles.createQuotation_container}>
      <div className={styles.main_section}>
        <div className={styles.leftSide}>
          <div className={styles.heading}>
            QUOTATIONS
            <div className={styles.blueCircle}>0</div>
          </div>
          <div className={styles.subhead}>Keep track for Quotations</div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.quotation_no_main}>
            <div className={styles.quotation}>Quotation No.</div>
            <div className={styles.quotation_no}>1</div>
          </div>
          <div className={styles.quotation_date_main}>
            <div className={styles.quotation_date}>Date</div>
            <div className={styles.qDate}>{currentDate.toLocaleString()}</div>
          </div>
          <div className={styles.moreInfoBtn} onClick={openMoreInfoModal}>
            <div>More Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuotation;
