import React, { useState } from "react";
import style from "./CreateMain.module.css";
import CreateQuotation from "./createQuotation/CreateQuotation";
import QuotaionFields from "./quotationFields/QuotaionFields";
import MoreInfoModal from "./modal/MoreInfoModal";
import NewCustModal from "./modal/NewCustModal";

const CreateMain = () => {
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false);
  const [isNewCustModalOpen, setIsNewCustModalOpen] = useState(false);

  const openMoreInfoModal = () => {
    setIsMoreInfoModalOpen(true);
  };

  const closeModal = () => {
    setIsMoreInfoModalOpen(false);
  };
  const openNewCustModal = () => {
    setIsNewCustModalOpen(true);
  };

  const closeNewCustModal = () => {
    setIsNewCustModalOpen(false);
  };
  return (
    <div className={style.createQuotation_main}>
      <CreateQuotation openMoreInfoModal={openMoreInfoModal} />
      <QuotaionFields openNewCustModal={openNewCustModal} />
      {isMoreInfoModalOpen && <MoreInfoModal closeModal={closeModal} />}
      {isNewCustModalOpen && <NewCustModal closeModal={closeNewCustModal} />}
    </div>
  );
};

export default CreateMain;
