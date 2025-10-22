import React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ATMDisplay from "../components/ATMDisplay";

function Home() {
  const navigate = useNavigate();

  return (
    <ATMDisplay title="Bank ATM">
     
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => navigate("/add-account")}>
          ➕ Add Account
        </Button>
        <Button variant="contained" onClick={() => navigate("/deposit")}>
          💰 Deposit
        </Button>
        <Button variant="contained" onClick={() => navigate("/check-balance")}>
          💰 Check Balance
        </Button>
        <Button variant="contained" onClick={() => navigate("/withdraw")}>
          💸 Withdraw
        </Button>
        <Button variant="contained" onClick={() => navigate("/change-pin")}>
          🔐 Change PIN
        </Button>
      </Stack>
    </ATMDisplay>
  );
}

export default Home;
