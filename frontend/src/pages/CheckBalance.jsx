import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { checkBalance } from "../services/pinService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const CheckBalance = () => {
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = async () => {
    try {
      const res = await checkBalance(pin);
      setBalance(res.data.balance);
      toast.success("✅ Balance fetched successfully!");
      console.log("Balance", res.data.balance)
    } catch (error) {
      console.error(error);
      toast.error("❌ Invalid PIN or account not found.");
      setBalance(null);
    }
  };

  return (
    <ATMDisplay title="💰 Check Account Balance">
      <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <TextField
          label="PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleCheckBalance}>
          Check Balance
        </Button>
        {balance !== null && (
          <Typography sx={{ mt: 3, fontSize: "1.2rem", fontWeight: "bold" }}>
            💳 Current Balance: {balance} PKR
          </Typography>
        )}
      </Box>
    </ATMDisplay>
  );
};

export default CheckBalance;
