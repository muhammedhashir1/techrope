import React from "react";
import style from "./CreateMain.module.css";
import CreateQuotation from "./createQuotation/CreateQuotation";
import QuotaionFields from "./quotationFields/QuotaionFields";

const CreateMain = () => {
  return (
    <div className={style.createQuotation_main}>
      <CreateQuotation />
      <QuotaionFields />
    </div>
  );
};

export default CreateMain;
