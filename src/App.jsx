import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import Main from "./components/main/Main";
import QuotationPage from "./components/quotation/QuotationPage";

import "./App.css";
import CreateQuotation from "./components/quotation/create/createQuotation/CreateQuotation";
import CreateMain from "./components/quotation/create/CreateMain";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Logo />
        <Aside />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/create-quotation" element={<CreateMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
