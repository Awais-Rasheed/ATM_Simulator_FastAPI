import React from "react";  
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import ChangePin from "./pages/ChangePin";
import AddAccount from "./pages/AddAccount";
import CheckBalance from "./pages/CheckBalance";
import ViewAccounts from "./pages/ViewAccounts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/change-pin" element={<ChangePin />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/check-balance" element={<CheckBalance />} />
          <Route path="/view-accounts" element={<ViewAccounts />} />
        </Routes>

      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
