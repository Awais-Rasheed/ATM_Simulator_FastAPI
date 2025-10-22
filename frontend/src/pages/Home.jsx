// src/pages/Home.jsx
import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ATMDisplay from "../components/ATMDisplay";

function Home() {
  const navigate = useNavigate();

  return (
    <ATMDisplay title="🏦 Bank ATM">
      <Stack spacing={2} sx={{ width: "80%" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/add-account")}
        >
          ➕ Add Account
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/deposit")}
        >
          💰 Deposit
        </Button> 

        <Button
          variant="contained"
          color="info"
          onClick={() => navigate("/check-balance")}
        >
          📊 Check Balance
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate("/withdraw")}
        >
          💸 Withdraw
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/change-pin")}
        >
          🔐 Change PIN
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/view-accounts")}
        >
          📋 View All Accounts
        </Button>
      </Stack>
    </ATMDisplay>
  );
}

export default Home;
