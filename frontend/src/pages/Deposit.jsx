import React, { useState } from "react";
import ATMDisplay from "../components/ATMDisplay";
import { TextField, Button } from "@mui/material";
import api from "../api";
import { toast } from "react-toastify";

function Deposit() {
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    try {
      await api.put(`/deposit/${pin}?amount=${amount}`);
      toast.success("✅ Deposit successful!");
      setAmount("");
      setPin("");
    } catch (err) {
      toast.error("❌ Deposit failed!");
    }
  };

  return (
    <ATMDisplay title="Deposit Money">
      <div>
        <TextField
          label="Enter PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Enter Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" fullWidth onClick={handleDeposit}>
          Deposit
        </Button>
      </div>
    </ATMDisplay>
  );
}

export default Deposit;
