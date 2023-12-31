import React from "react";
import styles from "./Main.module.css";
import SectionOne from "./section_one/Section_one";
import Table from "./table/Table";

const Main = () => {
  return (
    <div className={styles.main_container_Section}>
      <Table />
    </div>
  );
};

export default Main;
