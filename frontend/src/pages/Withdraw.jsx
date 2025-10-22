import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { withdrawAmount } from "../services/transactionService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const Withdraw = () => {
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = async () => {
    try {
      await withdrawAmount(pin, amount);
      toast.success("💸 Withdrawal successful!");
      setPin("");
      setAmount("");
    } catch (error) {
      toast.error("❌ Withdrawal failed. Check balance or PIN.");
    }
  };

  return (
    <ATMDisplay title="💸 Withdraw Cash">
      <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <TextField
          label="PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </Box>
    </ATMDisplay>
  );
};

export default Withdraw;
