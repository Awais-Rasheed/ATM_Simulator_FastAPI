import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { addAccount } from "../services/accountService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const AddAccount = () => {
  const [account_number, setAccountNumber] = useState("");
  const [account_title, setAccountTitle] = useState("");
  const [account_balance, setAccountBalance] = useState("");
  const [account_pin, setAccountPin] = useState("");

  const handleAddAccount = async () => {
    try {
      await addAccount({
        account_number,
        account_title,
        account_balance: parseFloat(account_balance),
        account_pin: parseInt(account_pin),
      });
      toast.success("✅ Account created successfully!");
      setAccountNumber("");
      setAccountTitle("");
      setAccountBalance("");
      setAccountPin("");
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to create account. Please check inputs.");
    }
  };

  return (
    <ATMDisplay title="➕ Add New Account">
      <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <TextField
          label="Account Number"
          value={account_number}
          onChange={(e) => setAccountNumber(e.target.value)}
          margin="dense"
        />
        <TextField
          label="Account Title"
          value={account_title}
          onChange={(e) => setAccountTitle(e.target.value)}
          margin="dense"
        />
        <TextField
          label="Initial Balance"
          type="number"
          value={account_balance}
          onChange={(e) => setAccountBalance(e.target.value)}
          margin="dense"
        />
        <TextField
          label="PIN"
          type="password"
          value={account_pin}
          onChange={(e) => setAccountPin(e.target.value)}
          margin="dense"
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleAddAccount}
        >
          Add Account
        </Button>
      </Box>
    </ATMDisplay>
  );
};

export default AddAccount;
