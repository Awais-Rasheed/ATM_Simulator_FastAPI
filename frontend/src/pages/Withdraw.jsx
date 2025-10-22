import React, { useState } from "react";
import ATMDisplay from "../components/ATMDisplay";
import { TextField, Button } from "@mui/material";
import api from "../api";
import { toast } from "react-toastify";

function Withdraw() {
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = async () => {
    try {
      const response = await api.put(`/withdraw/${pin}?amount=${amount}`);
      toast.success(response.data.message || "✅ Withdrawal successful!");
      setPin("");
      setAmount("");
    } catch (error) {
      toast.error("❌ Withdrawal failed!");
    }
  };

  return (
    <ATMDisplay title="Withdraw Cash">
      <div style={{ width: "100%" }}>
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
        <Button variant="contained" fullWidth onClick={handleWithdraw}>
          Withdraw
        </Button>
      </div>
    </ATMDisplay>
  );
}

export default Withdraw;
