import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const CheckBalance = () => {
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckBalance = async () => {
    if (!pin) {
      toast.warning("⚠️ Please enter your PIN!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(`http://127.0.0.1:8000/all-account`);
      const account = res.data.find((acc) => acc.account_pin === Number(pin));

      if (!account) {
        toast.error("❌ Invalid PIN or Account Not Found");
        setBalance(null);
      } else {
        setBalance(account.account_balance);
        toast.success("✅ Balance fetched successfully!");
      }
    } catch (error) {
      toast.error("❌ Failed to fetch balance");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ATMDisplay title="Check Account Balance">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label="Enter PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            mb: 2
          }}
        />
        <Button
          variant="contained"
          onClick={handleCheckBalance}
          sx={{
            backgroundColor: "#00ffc8",
            color: "black",
            "&:hover": { backgroundColor: "#00e6b8" },
          }}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Balance"}
        </Button>

        {balance !== null && (
          <Typography
            variant="h6"
            sx={{
              mt: 3,
              fontWeight: "bold",
            }}
          >
            💰 Current Balance: Rs. {balance.toFixed(2)}
          </Typography>
        )}
      </Box>
    </ATMDisplay>
  );
};

export default CheckBalance;
