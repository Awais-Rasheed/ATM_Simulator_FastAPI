import React, { useState } from "react";
import ATMDisplay from "../components/ATMDisplay";
import { TextField, Button } from "@mui/material";
import api from "../api";
import { toast } from "react-toastify";

function AddAccount() {
  const [account_number, setAccountNumber] = useState("");
  const [account_title, setAccountTitle] = useState("");
  const [account_balance, setAccountBalance] = useState("");
  const [account_pin, setAccountPin] = useState("");

  const handleAddAccount = async () => {
    try {
      await api.post("/add-account", {
        account_number,
        account_title,
        account_balance: Number(account_balance),
        account_pin: Number(account_pin),
      });
      toast.success("✅ Account Added Successfully!");
      setAccountNumber("");
      setAccountTitle("");
      setAccountBalance("");
      setAccountPin("");
    } catch (error) {
      toast.error("❌ Failed to add account!");
    }
  };

  return (
    <ATMDisplay title="Add New Account">
      <div style={{ width: "100%"}}>
        <TextField
          label="Account Number"
          value={account_number}
          onChange={(e) => setAccountNumber(e.target.value)}
          fullWidth
          sx={{ mb: 2 
          }}
        />
        <TextField
          label="Account Title"
          value={account_title}
          onChange={(e) => setAccountTitle(e.target.value)}
          fullWidth
          sx={{ mb: 2 
           }}
        />
        <TextField
          label="Initial Balance"
          type="number"
          value={account_balance}
          onChange={(e) => setAccountBalance(e.target.value)}
          fullWidth
          sx={{ mb: 2  
          }}
        />
        <TextField
          label="Set PIN"
          type="password"
          value={account_pin}
          onChange={(e) => setAccountPin(e.target.value)}
          fullWidth
          sx={{ mb: 2  
          }}
        />
        <Button variant="contained" fullWidth onClick={handleAddAccount}>
          Create Account
        </Button>
      </div>
    </ATMDisplay>
  );
}

export default AddAccount;
