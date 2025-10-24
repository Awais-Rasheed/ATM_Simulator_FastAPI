import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { depositAmount } from "../services/transactionService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const Deposit = () => {
  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    try {
      await depositAmount(pin, amount);
      toast.success("Deposit successful!");
      setPin("");
      setAmount("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to deposit. Please check your PIN or amount.");
    }
  };

  return (
    <ATMDisplay title="💰 Deposit Cash">
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
        <Button variant="contained" onClick={handleDeposit}>
          Deposit
        </Button>
      </Box>
    </ATMDisplay>
  );
};

export default Deposit;
