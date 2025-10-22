import React, { useState } from "react";
import ATMDisplay from "../components/ATMDisplay";
import { TextField, Button } from "@mui/material";
import api from "../api";
import { toast } from "react-toastify";

function ChangePin() {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const handleChangePin = async () => {
    try {
      await api.put(`/change-pin/${oldPin}?new_pin=${newPin}`);
      toast.success("✅ PIN changed successfully!");
      setOldPin("");
      setNewPin("");
    } catch {
      toast.error("❌ Failed to change PIN!");
    }
  };

  return (
    <ATMDisplay title="Change PIN">
      <div>
        <TextField
          label="Old PIN"
          type="password"
          value={oldPin}
          onChange={(e) => setOldPin(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="New PIN"
          type="password"
          value={newPin}
          onChange={(e) => setNewPin(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" fullWidth onClick={handleChangePin}>
          Change PIN
        </Button>
      </div>
    </ATMDisplay>
  );
}

export default ChangePin;
