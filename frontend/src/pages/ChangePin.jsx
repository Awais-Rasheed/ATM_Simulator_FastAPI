import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { changePin } from "../services/pinService";
import ATMDisplay from "../components/ATMDisplay";
import { toast } from "react-toastify";

const ChangePin = () => {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const handleChangePin = async () => {
    try {
      await changePin(oldPin, newPin);
      toast.success("🔐 PIN changed successfully!");
      setOldPin("");
      setNewPin("");
    } catch (error) {
      console.log(error)
      toast.error("❌ Failed to change PIN. Please check your input.");
    }
  };

  return (
    <ATMDisplay title="🔐 Change PIN">
      <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
        <TextField
          label="Old PIN"
          type="password"
          value={oldPin}
          onChange={(e) => setOldPin(e.target.value)}
          margin="dense"
        />
        <TextField
          label="New PIN"
          type="password"
          value={newPin}
          onChange={(e) => setNewPin(e.target.value)}
          margin="dense"
        />
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleChangePin}>
          Change PIN
        </Button>
      </Box>
    </ATMDisplay>
  );
};

export default ChangePin;
